import React from 'react'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-between w-[95%] mx-auto '>
        <LeftSidebar className='lg:w-1/4 w-full' />
        <Outlet className='lg:w-1/2 w-full'/>
        <RightSidebar className='lg:w-1/4 w-full'/>
    </div>
  )
}

export default Home
