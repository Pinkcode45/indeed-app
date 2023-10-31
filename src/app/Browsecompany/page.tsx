import React from 'react';
import Link from 'next/link'

const Browsecompany = () => {
  return (
        <div>
            <div>
                <div>
                    <h1 className='text-4xl md:text-3xl'>Browse companies by letter</h1>

                
                
                
                    <div className='mt-4 flex flex-col md:flex-row bg-slate-50 p-6 '>
                        <div>
                            <Link className='text-[#2557a7] mr-8' href='' >A</Link >
                            <Link className='text-[#2557a7] mr-8' href='' >B</Link >
                            <Link className='text-[#2557a7] mr-8' href='' >C</Link >
                            <Link className='text-[#2557a7] mr-8' href='' >D</Link >
                            <Link className='text-[#2557a7] mr-8' href='' >E</Link >
                            <Link className='text-[#2557a7] mr-8' href='' >F</Link >
                            <Link className='text-[#2557a7] mr-8' href='' >G</Link >
                            <Link className='text-[#2557a7] mr-8' href='' >H</Link >
                            <Link className='text-[#2557a7] mr-8' href='' >I</Link >
                            <Link className='text-[#2557a7] ml-[6px]'  href='' >J</Link >
                            <Link className='text-[#2557a7] ml-[35px]' href='' >K</Link >
                            <Link className='text-[#2557a7] ml-[35px]' href='' >L</Link >
                            <Link className='text-[#2557a7] ml-[34px]' href='' >M</Link >
                            <Link className='text-[#2557a7] ml-[29px]' href='' >N</Link >
                            <Link className='text-[#2557a7] ml-[30px]' href='' >O</Link >
                            <Link className='text-[#2557a7] ml-[32px]' href='' >P</Link >
                        </div>


            
                        <div>
                            <Link className='text-[#2557a7] mr-8 md:ml-8'  href='' >Q</Link >
                            <Link className='text-[#2557a7] mr-8' href='' >R</Link >
                            <Link className='text-[#2557a7] mr-8'  href='' >S</Link >
                            <Link className='text-[#2557a7] mr-8' href='' >T</Link >
                            <Link className='text-[#2557a7] mr-8' href='' >U</Link >
                            <Link className='text-[#2557a7] mr-8' href='' >W</Link >
                            <Link className='text-[#2557a7] mr-8' href='' >X</Link >
                            <Link className='text-[#2557a7] mr-8' href='' >Y</Link >
                            <Link className='text-[#2557a7] ' href='' >Z</Link >
                        </div>
                        
                    </div>  

                    {/* Another section */}
                    <div>
                        <div>
                            <h2>Companies starting with A</h2>
                            <div>
                                <h3>A Fine Dining Restarant</h3>
                                <Link href=''>A Fine Dining Restaurant jobs</Link>
                                <Link href=''>A Fine Dining Restaurant reviews</Link>
                                <Link href=''>A Fine Dining Restaurant salaries</Link>
                                <Link href=''>A Fine Dining Restaurant Q&A</Link>
                                <Link href=''>A Fine Dining Restaurant interviews</Link>
                                
                            </div>

                            <div>
                                <h3>A group of companies</h3>
                                <Link href=''>A group of companies jobs</Link>
                                <Link href=''>A group of companies reviews</Link>
                                <Link href=''>A group of companies salaries</Link>
                                <Link href=''>A group of companies Q&A</Link>
                                <Link href=''>A group of companies interviews</Link>
                                
                            </div>

                            <div>
                                <h3>A group of companies</h3>
                                <Link href=''>A group of companies jobs</Link>
                                <Link href=''>A group of companies reviews</Link>
                                <Link href=''>A group of companies salaries</Link>
                                <Link href=''>A group of companies Q&A</Link>
                                <Link href=''>A group of companies interviews</Link>
                                
                            </div>
                        </div>
                    </div>
                </div>  


            </div>
        </div>
                 
    )
}

export default Browsecompany;