import React from 'react'
import { useSelector } from 'react-redux';

// component
import NavItem from './NavItem';


const NavGroup = ({item}) => {

    const {permission} = useSelector(state=>state.authUser);

    const feature= permission.map(item=>item.feature_id)

    const navCollapse = item.children?.map((menuItem)=>(
        <>
        {
            menuItem.type === 'item' && (feature.includes(menuItem.id) || menuItem.id === 'dashboard') && (       
                <NavItem key={menuItem.id} item={menuItem} />
            )
        }
        </>
    ))


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