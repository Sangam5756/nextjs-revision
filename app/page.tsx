import { PrismaClient } from "@prisma/client";
import axios from "axios";
import prismaClient from "@/db"
// here we are making request to server to server not better way of doing this
// async function getUserDetails() {
//   const user = await axios.get("http://localhost:3000/api/v1/signup");
//   return user.data.user;
// }

// better we can direct make call to db instead making api call

async function getUserDetails() {
  const user = await prismaClient.user.findFirst({});
  return user;
}

export default async function Home() {
  const user = await getUserDetails();
  console.log(user);
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {user?.username}</div>

          {user?.password}
        </div>
      </div>
    </div>
  );
}
