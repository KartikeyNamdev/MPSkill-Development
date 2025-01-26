import db from "@repo/db/client";
export default function GET() {
  const userCreated = db.user.create({
    email: "kartikeynamdev2003@gmail.com",
    password: "kartikey",
  });
  return userCreated;
}
