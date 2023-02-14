import React from 'react'

// component
import NavItem from './NavItem';


const NavGroup = ({item}) => {

    const navCollapse = item.children?.map((menuItem)=>{

        switch(menuItem.type){
            case 'item':
                return <NavItem key={menuItem.id} item={menuItem} />;
            default :
            <div>Fix - Navigation Group</div>
        }
    })


  return (
    <div className='pt-3 bg-white '>
        {item.title &&
            <div className='text-medium text-zinc-400 mb-3 pl-6 select-none'>
                {item.title}
            </div>
        }
        {navCollapse}
    </div>
  )
}

export default NavGroup