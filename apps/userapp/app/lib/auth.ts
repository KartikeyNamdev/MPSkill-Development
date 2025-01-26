// import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextRequest } from "next/server";
import db from "@repo/db/client";
type credentials = {
  email: any;
  password: any;
};
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "Email",
        },
        password: { label: "Password", type: "password", required: true },
      },
      // TODO: User credentials type from next-aut

      async authorize(credentials, req) {
        console.log(credentials);
        // Do zod validation, OTP validation here
        const existingUser = await db.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });
        if (!(credentials.password = existingUser?.password)) {
          return {
            msg: "Wrong password",
          };
        }
        return {
          msg: "User found",
        };
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
};

//   callbacks: {
//     // TODO: can u fix the type here? Using any is bad
//     async session({ token, session }: any) {
//       session.user.id = token.sub;

//       return session;
//     },
//   },
