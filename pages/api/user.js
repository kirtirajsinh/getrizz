// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../../server/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { email } = req.query;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    res.status(200).json(user);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: "Method not allowed" });
  }
}
