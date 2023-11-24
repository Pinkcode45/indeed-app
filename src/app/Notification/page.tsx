import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar2 from '@/componets/Navbar2';
import Footer from '@/componets/Footer';

const Notifictionpage = () => {
  return (
    <div>
        <Navbar2 />
        <div className=' md:mt-6'>
            <div className='bg-gray-100/50 py-10'>
                <div className='flex items-center justify-center mb-4'>
                    <Image
                        src='/notification.png'
                        alt='/'
                        width={180}
                        height={180}>
                    </Image>
                </div>
                <div className='flex items-center justify-center '>
                    <div >
                        <p className='font-bold text-2xl w-[20rem] md:text-3xl md:w-full'>Nothing right now. Check back later!</p>
                        <p className='text-sm w-60 md:w-96 md:ml-8'>This is where we’ll notify you about your job applications and other useful information to help you with your job search.</p><br />
                        <Link href=''><button className='md:ml-12 bg-[#2557a7] rounded-lg py-3 px-[5rem] md:px-[8rem]  text-white font-bold border-2 outline-slate-1500 '>Find Jobs</button></Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Notifictionpage;