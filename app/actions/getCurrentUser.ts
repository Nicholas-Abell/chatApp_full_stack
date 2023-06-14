import prisma from '../libs/prismadb';

import getSession from './getSessions';

const getCurrentUser = async () => {
    try {
        const session = await getSession();

        if(!session?.user) return null;

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })

        if(!currentUser) return null;

        return currentUser;

    } catch (error: any) {
        console.log('getCurrentUser Error: ', error);
        return null;
    }
}

export default getCurrentUser;