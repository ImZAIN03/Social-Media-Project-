import React from 'react';
import Avatar from 'react-avatar';
import { FaSearch } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div className='w-[25%]'>
      <div className='flex mt-2 items-center p-2 bg-gray-100 rounded-full outline-none w-full'>
        <FaSearch size="15px"/>
        <input type='text' className='bg-transparent outline-none px-2' placeholder='Search'/>
      </div>
      <div className='p-4 bg-slate-100 rounded-2xl my-4 '>
        <h1 className='font-bold text-lg my-3'>People To Follow</h1>
        <div className='flex items-center justify-between my-3'>
          <div className='flex'>
            <div>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoEAMYKHiwI5JH_IlxayW3-9UurHlASFy9A&s" size="40" round={true} />
            </div>
            <div className='ml-2'>
              <h1 className='font-bold'>Zain</h1>
              <p className='text-sm'>@mzain03</p>
            </div>
          </div>
            <div>
              <button className='px-3 py-1 text-white bg-black rounded-full'>Profile</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar