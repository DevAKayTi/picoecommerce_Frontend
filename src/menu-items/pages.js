import { AiOutlineLogin } from 'react-icons/ai';
import { MdOutlineAppRegistration } from 'react-icons/md';



const icons = {
    AiOutlineLogin,
    MdOutlineAppRegistration
}

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: '/admin/login',
            icon: icons.AiOutlineLogin,
            target: true
        },
        {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: '/admin/register',
            icon: icons.MdOutlineAppRegistration,
            target: true
        },
    ]
};

export default pages;