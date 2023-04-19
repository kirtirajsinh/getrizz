import { getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  callbacks: {
    async signIn(user) {
      // Extract user data from the Google authentication response
      console.log("user", user.user);

      try {
        // Check if a user with the same email already exists
        const existingUser = await prisma.user.findUnique({
          where: {
            email: user.user.email,
          },
        });

        // If the user already exists, return the user object
        if (existingUser) {
          return existingUser;
        }

        // Otherwise, create a new user
        const newUser = await prisma.user.create({
          data: {
            name: user.user.name,
            email: user.user.email,
            image: user.user.image,
            token: 0.1,
          },
        });

        // Return the newly created user object
        return newUser;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export const getServerAuthSession = (ctx) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
