import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <div className='w-[20%]'>
        <div>
            <div>
                <img className='ml-1' width={"65px"} src='SM.png' alt='Logo'/>
            </div>
            <div className='my-3 '>
                <Link to="/" className='flex items-center my-2 px-1 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>                        
                    <FaHome size={"24px"}/>
                    </div>
                    <h1 className='font-bold text-md ml-1'>Home</h1>
                </Link>
                <div className='flex items-center my-2 px-1 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>                        
                    <FaHashtag size={"24px"}/>
                    </div>
                    <h1 className='font-bold text-md ml-1'>Explore</h1>
                </div>
                <div className='flex items-center my-2 px-1 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>                        
                    <IoIosNotifications size={"24px"}/>
                    </div>
                    <h1 className='font-bold text-md ml-1'>Notifications</h1>
                </div>
                <Link to="/profile" className='flex items-center my-2 px-1 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>                        
                    <FaUser size={"24px"}/>
                    </div>
                    <h1 className='font-bold text-md ml-1'>Profile</h1>
                </Link>
                <div className='flex items-center my-2 px-1 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>                        
                    <IoBookmarks size={"24px"}/>
                    </div>
                    <h1 className='font-bold text-md ml-1'>Bookmarks</h1>
                </div>
                <div className='flex items-center my-2 px-1 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>                        
                    <IoMdExit size={"24px"}/>
                    </div>
                    <h1 className='font-bold text-md ml-1'>Logout</h1>
                </div>
                <button className='px-4 py-2 border-1 text-md bg-cyan-600 text-white w-full rounded-full font-semibold'>Post</button>                
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar