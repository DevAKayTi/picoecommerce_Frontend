import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineBriefcase } from 'react-icons/hi';



const icons = {
    AiOutlineUser,
    HiOutlineBriefcase
}

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'usermanagement',
    title: 'User Management',
    type: 'group',
    children: [
        {
            id: 1,
            title: 'Users',
            type: 'item',
            url: '/users',
            icon: icons.AiOutlineUser,
            target: true
        },
        {
            id: 2,
            title: 'Roles',
            type: 'item',
            url: '/roles',
            icon: icons.HiOutlineBriefcase,
            target: true
        },
    ]
};

export default pages;