import React from 'react';

import {AiOutlineSearch} from 'react-icons/ai'

import './Search.css'

const Search = () => {
  return (
    <div className='w-56 h-9 ml-4 items-center relative search hidden md:flex'>
        <div className='w-10 h-9 flex justify-center items-center text-gray-500 absolute'>
            <AiOutlineSearch/>
        </div>
        <input type="text" placeholder='Search..'/>
    </div>
  )
}

export default Search