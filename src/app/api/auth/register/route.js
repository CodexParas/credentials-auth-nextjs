import { connectDB } from "@/configs/dbConfig";
import { userModel } from "@/models/userModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { name, email, password } = await req.json();
  await connectDB();
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return NextResponse.json(
      { message: "Email is already registered" },
      { status: 400 }
    );
  }
  const newUser = await userModel.create({ name, email, password });
  return NextResponse.json(
    { message: "User registered successfully" },
    { status: 201 }
  );
};
