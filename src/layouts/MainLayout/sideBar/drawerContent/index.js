import React from 'react'

// Component
import NavGroup from './NavGroup';

// project navigation data
import menuItem from '../../../../menu-items';

const DrawerContent = () => {

    const NavGroups = menuItem.items.map((item) => (
        <>
            {
                item.type === 'group' && (
                    <NavGroup key={item.id} item={item} />
                )
            }
        </>
    ));

    return (
        <div className='flex flex-col'>
            {NavGroups}
        </div>
    )
}

export default DrawerContent