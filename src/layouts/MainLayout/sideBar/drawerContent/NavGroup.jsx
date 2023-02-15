import React from 'react'
import { useSelector } from 'react-redux';

// component
import NavItem from './NavItem';


const NavGroup = ({item}) => {

    const {permission} = useSelector(state=>state.authUser);


    const navCollapse = item.children?.map((menuItem)=>{

        const feature= permission.map(item=>item.feature_id)

        if(feature.includes(menuItem.id) || menuItem.id === 'dashboard'){

        switch(menuItem.type){
            case 'item':
                return <NavItem key={menuItem.id} item={menuItem} />;
            default :
            <div>Fix - Navigation Group</div>
        }
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