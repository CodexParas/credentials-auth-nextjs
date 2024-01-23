// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB, disconnectDB } from "@/configs/dbConfig";
import { userModel } from "@/models/userModel";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        try {
          await connectDB();
          const existingUser = await userModel.findOne({
            email: credentials.email,
          });
          if (!existingUser) {
            return null;
          }
          const isMatch = await existingUser.matchPassword(
            credentials.password
          );
          if (!isMatch) {
            return null;
          }
          const user = {
            id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
          };
          return user;
        } finally {
          await disconnectDB();
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = user;
      }
      return Promise.resolve(token);
    },
    async session({ session, token }) {
      session.user = token;
      return Promise.resolve(session);
    },
  },
});

export { handler as GET, handler as POST };
