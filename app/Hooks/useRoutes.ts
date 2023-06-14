import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import { HiChat } from 'react-icons/hi';
import { HiArrowLeft, HiUsers } from "react-icons/hi2";
import { signOut } from 'next-auth/react';

import useConversation from "./useConversations";

const useRoutes = () => {
    const pathname = usePathname();
    const {conversationId} = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiChat,
            active: pathname === '/conversations' || !!conversationId,
        },
        {
            label: 'Users',
            href: '/users',
            icon: HiUsers,
            active: pathname === '/users',
        },
        {
            label: 'Logout',
            href: '#',
            icon: HiArrowLeft,
            onCLick: () => signOut(),
        },
    ], [pathname, conversationId]);

    return routes;
}

export default useRoutes;

