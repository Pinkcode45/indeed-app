import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar2 from '@/componets/Navbar2';
import Footer from '@/componets/Footer';

const Messagepage = () => {
  return (
    <div>
        <Navbar2 />
        <div >
            <div>
                <div className='md:grid grid-cols-2 py-4 md:px-[6rem] '>
                    {/* Borders */}
                    <div className=' md:w-80 md:border-2 rounded-lg p-4 md:mb-[-9rem]'>
                        <div className='md:pb-[20rem]'>
                            <p className='hidden md:flex text-2xl font-bold pb-4'>Messages</p>
                            <div className='flex items-center justify-center md:mb-[8rem]'>
                                <select className="select select-bordered w-full ">
                                    <option className='prose prose-lg'>Name</option>
                                    <option className='mt-8 prose-lg'>Achieve</option>
                                    <option className='prose-lg'>Spam</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className='border-[1px] rounded-lg  md:ml-[-10rem] md:mb-[-9rem]'>
                        <div className='flex items-center justify-center pb-6 mt-[6rem]'>
                            <Image src='/Message Avarta.png' alt=''
                                width={130}
                                height={130}>
                            </Image>
                        </div>
                        <div className='flex items-center justify-center pb-6'>
                            <div>
                                <h2 className='font-bold text-2xl pb-4'>Something’s not right </h2>
                                <p className='text-sm ml-[2rem]'>Your messages didn’t load.</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Link href=''><button className=' bg-[#2557a7] rounded-lg py-2 px-[7rem]  text-white font-bold border-2 outline-slate-1500 '>Try again</button></Link>
                        </div>
        
        
                    </div>
                </div>
            </div>
        </div>
        <Footer  />
    </div>
  )
}

export default Messagepage;