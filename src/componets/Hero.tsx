"use client"
import React, { useState } from 'react'
import { GrSearch} from "react-icons/gr"
import { HiLocationMarker, HiChevronDown } from "react-icons/hi"
import Link from "next/link"



const Hero = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <div className='items-center justify-center p-[4rem] md:flex '>
        <div className='max-w-[480px]  md:w-full md:mt-3  '>
          <div className=' flex items-center border-indigo-500/75 hover:box-content border-2 rounded-lg p-3 py-2 md:shadow-sm'>
            <input className=' flex-grow  text-gray-600 pl-5 bg-transparent outline-none' type="text" 
              placeholder='Job title,keywords,or company'/>
              <GrSearch className="cursor-pointer mx-auto md:ml-[8rem]"/>
          </div>
        </div>


        <div className='max-w-[480px] md:w-full mt-3 md:ml-4 '>
          <div className=' flex items-center border-indigo-500/75 hover:box-content border-2 rounded-lg p-3 py-2 md:shadow-sm'>
            <input className=' flex-grow  text-gray-600 pl-5 bg-transparent outline-none' type="text" 
              placeholder='City state,zip code,or remote '/>
              <HiLocationMarker className="cursor-pointer mx-auto md:ml-[8rem]"/>
          </div>
      </div>


      <Link href=''><button className='bg-[#2557a7] rounded-lg p-2  text-white font-bold border-2 mt-3 w-full outline-slate-1500 md:w-[100px]'>Find jobs</button></Link>

      </div> 
    
      <div className='flex items-center justify-center mt-[-2rem] '>
        <Link href=""><h2 className='font-bold text-[#2557a7] text-1xl ]'>Post your CV</h2></Link> 
        <span>-it only takes a few seconds</span>
      </div>

      <div className='hidden mt-8  md:flex items-center justify-center '>
        <h4>what trending on the indeed</h4>
        <div className='flex flex-col cursor-pointer ml-4 ' onClick={()=>setToggle(!toggle)}>
          <HiChevronDown size={20} />
        </div>
      </div>

      {/* drop dowm links */}

      {toggle ? 
      <div className='invisible border-t-2 mt-5 md:visible duration-400 translate-y-8 '>
      <div className='flex flex-row items-center justify-around text-xs  '>
        {/* 1 */}
        <div className='flex flex-col mt-[-2rem]'>
          <h3 className='font-bold mb-6'>Trending Searches</h3>
          <div className='flex flex-col gap-4 underline text-[#2557a7]'>
            <Link  href="/">C Lagos</Link>
            <Link href="/">Engineering Jobs In Lagos</Link>
            <Link href="/">Remote Customer Service Representative Lagos</Link>
            <Link href="/">Control Officer Port Harcourt C</Link>
            <Link href="/">Full Time Kaduna</Link>
            <Link href="/">Yaba</Link>
            <Link href="/">Full Time Delta</Link>
            <Link href="/">Part Time Port Harcourt</Link>
            <Link href="/">Part Time Ibadan</Link>
            <Link href="/">Full Time Ogun</Link>
            <Link href="/">Full Time Osogbo</Link>
            <Link href="/">Jobs In Kano</Link>
            <Link href="/">Imo State</Link>
            <Link href="/">Uyo</Link>
            <Link href="/">Full Time Enugu</Link>
            <Link href="/">Full Time Rivers</Link>
            <Link href="/">Full Time Owerri</Link>
            <Link href="/">Full Time Kwara</Link>
            <Link href="/">Full Time Abeokuta</Link>
            <Link href="/">Job In Abuja</Link>
            <Link href="/">Full Time Warri</Link>
            <Link href="/"> Oyo State</Link>
            <Link href="/">Part Time Lekki</Link>
            <Link href="/"> Full Time Oyo</Link>
            <Link href="/">Osogbo</Link>
            <Link href="/">Full Time Kano</Link>
            <Link href="/"> Kebbi</Link>
          </div>
        </div>

            {/* 2 */}
        <div className='flex flex-col mt-8'>
          <h3 className='font-bold mb-6'>Trending Jobs</h3>
          <div className='flex flex-col gap-4 underline text-[#2557a7]'>
                    
            <Link href="/">C</Link>
            <Link href="/">Data Analyst Remote Lagos</Link>
            <Link href="/">Architect Lagos</Link>
            <Link href="/">Data Analyst Abuja</Link>
            <Link href="/">Social Media Lagos</Link>
            <Link href="/">E Commerce Website</Link>
            <Link href="/">Software Engineer Lagos</Link>
            <Link href="/">M Kopa</Link>
            <Link href="/">No Experience, Remote Jobs Lagos</Link>
            <Link href="/">Graphic Design Lagos</Link>
            <Link href="/">Graphics Designer Lagos</Link>
            <Link href="/">Assistant Abuja</Link>
            <Link href="/">Business Analyst Lagos</Link>
            <Link href="/">Social Media Manager Lagos</Link>
            <Link href="/">Ongoing Recruitment Abuja</Link>
            <Link href="/">Ui Ux Designer Lagos</Link>
            <Link href="/">Brand Marketing Communication, Digital Media Lagos</Link>
            <Link href="/">Part Time, Remote Lagos</Link>
            <Link href="/">Digital Marketing Remote Lagos</Link>
            <Link href="/">Customer Service Abuja</Link>
            <Link href="/">Work From Home Online Lagos</Link>
            <Link href="/">Fintech Company Lagos</Link>
            <Link href="/">Plumbing Jobs</Link>
            <Link href="/">Front End</Link>
            <Link href="/">Visa Sponsorship In USA</Link>
            <Link href="/">Customer Support Lagos</Link>
            <Link href="/">Power App</Link>
            <Link href="/">Customer Service Lagos</Link>
            <Link href="/">React Develope</Link>
          </div>
        </div>

            {/* 3 */}
        <div className='flex flex-col '>
          <h3 className='font-bold mb-6'>Popular Cities</h3>
          <div className='flex flex-col gap-4  underline text-[#2557a7]'>
            <Link href="/">Abia</Link>
            <Link href="/">Asaba</Link>
            <Link href="/">Warri</Link>
            <Link href="/">Abuja</Link>
            <Link href="/">Lagos</Link>
            <Link href="/">Anambra</Link>
            <Link href="/">Akwa Ibom</Link>
            <Link href="/">Yaba</Link>
            <Link href="/">Lekki</Link>
            <Link href="/">Kano</Link>
            <Link href="/">Akure</Link>
            <Link href="/">Kwara</Link>
            <Link href="/">Calabar</Link>
            <Link href="/">Owerri</Link>
            <Link href="/">Rivers</Link>
            <Link href="/">Ikeja</Link>
            <Link href="/">Benin City</Link>
            <Link href="/">Ibadan</Link>
            <Link href="/">Ogun</Link>
            <Link href="/">Delta</Link>
            <Link href="/">Abeokuta</Link>
            <Link href="/">Port Harcourt</Link>
            <Link href="/">Osun</Link>
            <Link href="/">Enugu</Link>
            <Link href="/">Kaduna</Link>
            <Link href="/">Ilorin</Link>
            <Link href="/">Onitsha</Link>
            <Link href="/">Osogbo</Link>
          </div>
        </div>

              {/* 4 */}
        <div className='flex flex-col mt-[-16rem]'>
          <h3 className='font-bold mb-6'>Popular Companies</h3>
          <div className='flex flex-col gap-4  underline text-[#2557a7]'>
            <Link href="/" >Safety Security Supervisor</Link>
            <Link href="/" >Work From Home $ Strategy Manager</Link>
            <Link href="/">Administrative Assistant</Link>
            <Link href="/">Commercial Manager</Link>
            <Link href="/">Nigeria Lagos</Link>
            <Link href="/">US Agency For International Development Usaid</Link>
            <Link href="/">Product Designer</Link>
            <Link href="/">Remote</Link>
            <Link href="/"> Data Scientist, Remote</Link>
            <Link href="/">Oil Gas, Energy Intern</Link>
            <Link href="/">Plastic Lagos</Link>
            <Link href="/">
            <Link href="/">Content Writing, Cryptocurrency, Remote</Link>
            <Link href="/">Humanitarians</Link></Link>
            <Link href="/">Work From Home Online</Link>
            <Link href="/">Jobs</Link>
            <Link href="/">Data Analysis</Link>
            <Link href="/">Dangote Group</Link>
            <Link href="/"> Crossover Work From Home, Remote</Link>
            <Link href="/">Plant Manager</Link>
            <Link href="/">Graduate</Link>
            <Link href="/">Online</Link>
          </div>
        </div>
        </div>
      </div>: null}

      
     
    </div>    
  )
}

export default Hero;

























