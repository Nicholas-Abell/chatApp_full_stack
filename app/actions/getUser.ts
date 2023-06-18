import prisma from "../libs/prismadb";
import getSession from "./getSessions";

const getUsers = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          //not own email
          email: session.user.email,
        },
      },
    });

    return users;
  } catch (error) {
    return [];
    console.log("Get User Error: ", error);
  }
};

export default getUsers();
