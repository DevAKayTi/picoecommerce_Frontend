import React from 'react'

// Component
import NavGroup from './NavGroup';

// project navigation data
import menuItem from '../../../../menu-items';

const DrawerContent = () => {

    const NavGroups = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return <div>Fix - Navigation Group</div>
        }
    })

    return (
        <div className='flex flex-col'>
            {NavGroups}
        </div>
    )
}

export default DrawerContent