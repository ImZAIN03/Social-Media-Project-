import React from 'react'
import Avatar from 'react-avatar';
import { FaComment } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { IoBookmark } from "react-icons/io5";

const Tweet = () => {
  return (
    <div className='border-b border-gray-100 '>
        <div>
            <div className='flex p-4'>
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoEAMYKHiwI5JH_IlxayW3-9UurHlASFy9A&s" size="40" round={true} />
                <div className='ml-2 w-full'>
                    <div className='flex items-center'>
                        <h1 className='font-bold'>Zain</h1>
                        <p className='text-sky-700 text-sm ml-1'>@mzain03 . 1m</p>
                    </div>
                    <div>
                        <p>Hey everyone lets connect and network</p>
                    </div>
                    <div className='flex justify-between my-2'>
                        <div className='flex items-center'>
                            <div className='p-2 hover:bg-red-100 rounded-full cursor-pointer'>
                            <FaComment size="18px"/>
                            </div>
                            <p>0</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='p-2 hover:bg-sky-100 rounded-full cursor-pointer'>
                            <IoIosHeart size="18px"/>
                            </div>
                            <p>0</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='p-2 hover:bg-yellow-100 rounded-full cursor-pointer'>
                            <IoBookmark size="18px"/>
                            </div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Tweet