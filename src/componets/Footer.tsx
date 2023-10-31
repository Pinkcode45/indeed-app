import React from 'react'
import Link from "next/link"



const Footer = () => {
    
  return (
    <div className='border-t-2 mt-[8rem] p-4'>
        <div className='flex flex-row gap-6 text-sm  text-gray/50 font-poppins  pb-[2rem] '>
        <Link className='hover:underline underline-offset-4' href="/Browsejob">Browse Jobs</Link>
        <Link className='hover:underline underline-offset-4' href="/Browsecompany">Browse Companies</Link>
        <Link className='hover:underline underline-offset-4' href="">Countries</Link>
        <Link className='hover:underline underline-offset-4' href="">About</Link>
        <Link className='hover:underline underline-offset-4' href="">Help Center</Link>
        <Link className='hover:underline underline-offset-4' href="">ESG at Indeed</Link>
        </div>

        <div className='flex flex-row gap-6 text-sm'>
        <span>© 2023 Indeed</span>
        <Link className='hover:underline underline-offset-4' href="">Accessibility at Indeed</Link>
        <Link className='hover:underline underline-offset-4' href="">Privacy Center</Link>
        <Link className='hover:underline underline-offset-4' href="">Cookies</Link>
        <Link className='hover:underline underline-offset-4' href="">Privacy</Link>
        <Link className='hover:underline underline-offset-4' href="">Terms</Link>
        </div>
    </div>
  )
}

export default Footer;