import React from 'react';
import Avatar from 'react-avatar';
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='w-[50%] border-l border-r border-gray-400'>
        <div>
            <div className='flex items-center py-2'>
                <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                    <IoArrowBack size="24px"/>
                </Link>
                <div className='ml-2'>
                    <h1 className='font-bold text-lg'>Zain</h1>
                    <p className='text-gray-500 text-sm'>10 Posts</p>
                </div>
            </div>
            <img src='https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360' alt='Banner'/>
            <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoEAMYKHiwI5JH_IlxayW3-9UurHlASFy9A&s" size="120" round={true} />
            </div>
            <div className='text-right m-4'>
                <button className='px-4 py-1 bg-sky-600 text-white hover:bg-gray-900 hover:text-white rounded-full border border-gray-400'>Edit Profile</button>
            </div>
            <div className='m-4'>
                <h1 className='font-bold text-xl'>Zain</h1>
                <p>@mzain03</p>
            </div>
            <div className='m-4 text-sm'>
                <p>Full-Stack Web Developer | WordPress Developer | Graphics Designer | Content Writer | University Of Peshawar |</p>
            </div>
        </div>
    </div>
  )
}

export default Profile