## Getting Started

Follow these steps to set up the project on your local machine:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/CodexParas/credentials-auth-nextjs.git
   ```

2. **Install Dependencies:**

   ```bash
   cd credentials-auth-nextjs
   npm install
   ```

3. **Create Environment Variables:**

   Duplicate the `.env.sample` file and rename it to `.env.local`. Fill in the following values:

   ```env
   MONGODB_URL=your-mongodb-connection-string
   NEXTAUTH_URL=your-nextauth-url
   NEXTAUTH_SECRET=your-nextauth-secret
   ```

   Replace `your-mongodb-connection-string`, `your-nextauth-url`, and `your-nextauth-secret` with your actual MongoDB connection string, NextAuth URL, and NextAuth secret, respectively.

4. **Configure MongoDB:**

   Update the MongoDB connection string in the `config/dbConfig.js` file with your own database connection details.

5. **Run the Application:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Usage

This starter includes a basic authentication setup using Next Auth with credentials. Customize and extend the authentication flow according to your application's requirements.

- Authentication routes can be found in the `src/app/api/auth` directory.
- User model and authentication logic are in the `src/models/userModel.js` file.
- Protected routes are demonstrated in the `src/middleware.js` file.

Feel free to build on top of this starter and add more features to suit your project needs.

## Additional Notes

- Make sure to keep sensitive information such as API keys and secrets secure. Use environment variables to manage them.
- Refer to the documentation of each library (Next Auth, Mongoose, Tailwind CSS, bcryptjs, React Toastify) for more in-depth information.

Happy coding!