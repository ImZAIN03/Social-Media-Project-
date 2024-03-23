import React, { useState } from 'react'

const Login = () => {
  const [isLogin,setIsLogin] = useState(true);

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-evenly w-[80%]'>
        <div>
          <img className='ml-1' width={"300px"} src='SM.png' alt='Logo'/>
        </div>
      <div >
        <div className='my-5'>
          <h1 className='font-bold text-6xl'>Happening Now.</h1>
        </div>
        <h1 className='mt-4 mb-2 text-2xl font-bold'>{isLogin ? "Login" : "Sign Up"}</h1>
        <form className='flex flex-col w-[70%]'>
          {
            !isLogin && (<>
          <input type='text' placeholder='Name' className='bg-transparent outline-sky-600 border-2 border-sky-600 px-3 py-1 rounded-full my-1 font-semibold'/>
          <input type='text' placeholder='Username' className='bg-transparent outline-sky-600 border-2 border-sky-600 px-3 py-1 rounded-full my-1 font-semibold'/>
            </>)
          }
          <input type='text' placeholder='Email' className='bg-transparent outline-sky-600 border-2 border-sky-600 px-3 py-1 rounded-full my-1 font-semibold'/>
          <input type='password' placeholder='Password' className='bg-transparent outline-sky-600 border-2 border-sky-600 px-3 py-1 rounded-full my-1 font-semibold'/>
          <button className='px-4 py-2 text-lg border-none bg-cyan-600 text-white rounded-full my-3'>{isLogin ? "Login" : "Create Account"}</button>
          <h1 className='font-semibold'>{isLogin ? "Don't have and account?" :  "Already have and account?"} <span className='cursor-pointer font-semibold text-sky-600 text-lg' onClick={loginSignupHandler}>{isLogin ? "Sign Up" :"Login"}</span></h1>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login