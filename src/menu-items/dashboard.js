import { MdDashboard } from 'react-icons/md';

const icons = {
    MdDashboard
}

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.MdDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;