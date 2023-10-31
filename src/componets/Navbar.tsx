"use client"
import Link from "next/link"
import React, { useState } from 'react'
import Image from 'next/image';
import { BiSolidUser} from "react-icons/bi"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose} from "react-icons/ai"
import { TbMathGreater } from "react-icons/tb"






const Navbar = () => {

  const[toggle, setToggle]=useState(false)

  return (
    <div className='flex items-center px-5 py-2 justify-between shadow-sm'>
      <div className='flex items-center justify-center'>
        <Link href="/">
          <Image src="/deed.png"
          width={100}
          height={100}
          alt="logo" />
        </Link>

        <Link href="/">
          <Image className='ml-3' src="/flower.jpeg"
          width={60}
          height={60}
          alt="logo" />
        </Link>

        <Link href="/Findjob"><span className="hidden md:flex ml-3 hover:underline underline-offset-[2rem]  ">Find Job</span></Link>
        <Link href="/Company"><span className='hidden md:flex ml-3 hover:underline underline-offset-[2rem]'>Company reviews</span></Link>
      </div>
    
      <div className='flex items-center'>
          <Link href="/Signin"><span className='hidden md:flex mr-10 font-bold text-[#2557a7] cursor-pointer hover:underline underline-offset-[2rem]'>Sign in</span></Link>
          <div></div>
          <Link href="/Employers">
            <span className='hidden md:flex hover:underline cursor-pointer underline-offset-[2rem]'>Employers/ <span>Post Job</span>
            </span>
          </Link>
          <Link href=""><button className='flex items-center  text-1xl font-bold bg-blue-600 text-white rounded-lg px-3 py-1 md:hidden' >
            <span  className='mr-2'><BiSolidUser/></span>
            Sign in
          </button></Link>
          <FiMenu onClick={()=>setToggle(!toggle)} className="text-2xl ml-2 md:hidden"/>
          <span></span>
      </div>
     
      {/* mobile menu */}
      {/* overlay */}
      {toggle ? <div className='bg-white/80 fixed w-full h-screen z-10
      top-0 left-0'></div> : ''}
      

      {/* side drawer menu */}

      <div className={toggle ? 'fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300' :
       'fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={()=>setToggle(!toggle)}  size={25} className="absolute mt-4 right-4 md:hidden"/>

          <div className=' flex items-center mt-12 justify-between text-1xl p-4 font-bold md:hidden border-t-2'>
            <h3>Find jobs</h3>
            <TbMathGreater/>
          </div>

          <div className=' flex items-center justify-between text-1xl p-4 font-bold md:hidden border-t-2' >
            <h3>Companys reviews</h3>
            <TbMathGreater/>
          </div>

          <div className=' flex items-center justify-between text-1xl p-4 font-bold md:hidden border-t-2'>
            <h3>Employers</h3>
            <TbMathGreater/>
          </div>

          <div className=' flex items-center justify-between text-1xl p-4 font-bold md:hidden border-t-2'>
            <h3>Create your Cv</h3>
            <TbMathGreater/>
          </div>

          <div className=' flex items-center justify-between text-1xl p-4 font-bold border-t-2 md:hidden'>
            <h3>Change Country</h3>
            <TbMathGreater/>
          </div>

          <div className=' flex items-center justify-between text-1xl p-4 font-bold md:hidden border-t-2'>
            <h3>Help Center</h3>
            <TbMathGreater/>
          </div>

      </div>




    </div>
  )
}

export default Navbar