"use client"
import Link from "next/link"
import React, { useState } from 'react'
import Image from 'next/image';







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

        <Link href="/Findjob"><span className="hidden md:flex ml-3 hover:underline underline-offset-[2rem] hover:text-[#2557a7]  ">Find Job</span></Link>
        <Link href="/Company"><span className='hidden md:flex ml-3 hover:underline underline-offset-[2rem] hover:text-[#2557a7]'>Company reviews</span></Link>
      </div>
    
      
     
      

      




    </div>
  )
}

export default Navbar