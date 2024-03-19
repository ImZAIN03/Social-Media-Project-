import React from 'react';
import Avatar from 'react-avatar';
import { FaImage } from "react-icons/fa6";

const CreatePost = () => {
  return (
    <div className='w-[100%]'>
        <div className=''>
            <div className='flex items-center justify-evenly border-b border-gray-100'>
                <div className='cursor-pointer hover:bg-gray-100 w-full text-center px-4 py-3'>
                    <h1 className='font-bold text-gray-800 text-lg'>For You</h1>
                </div>
                <div className='cursor-pointer hover:bg-gray-100 w-full text-center px-4 py-3'>
                    <h1 className='font-bold text-gray-800 text-lg'>Following</h1>
                </div>
            </div>
            <div>
                <div className='flex items-center p-4'>
                    <div>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoEAMYKHiwI5JH_IlxayW3-9UurHlASFy9A&s" size="40" round={true} />
                    </div>
                    <input className='w-full outline-none border-none text-lg ml-2 bg-transparent' type='text' placeholder='Share Your Thoughts...'/>
                </div>
                <div className='flex items-center justify-between p-4 border-b-2 border-gray-100'>
                    <div>
                        <FaImage/>
                    </div>
                    <button className='px-4 py-1 text-lg border-none bg-cyan-600 text-white rounded-full'>Post</button>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default CreatePost