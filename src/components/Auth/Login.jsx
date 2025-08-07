import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const submitHandler = (e) => {
     e.preventDefault();
     handleLogin(email,password)
     setEmail('');
     setPassword('');
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-28'>
            <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center 
            justify-center'>
                <input type="email" value={email}
                onChange={(e) => setEmail(e.target.value)} required className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' placeholder='Enter your email'/>
                <input type='password'
                value={password} onChange={(e) => setPassword(e.target.value)}className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 mt-3' placeholder='Enter your password'/>

                <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emarald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'> Login </button>

            </form>
        </div>
    </div>
  )
}

export default Login