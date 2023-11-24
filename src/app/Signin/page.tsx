import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import Navbar2 from '@/componets/Navbar2'
import Footer from '@/componets/Footer'

const Signinpage = () => {
  return (
    <div>
      <Navbar2 />
      <div className=' flex items-center justify-center mt-[8rem] '>
        <div>
          {/* Logo */}
          <div className=' flex items-center justify-center mb-8 '>
              <Link href="/">
                <Image src="/deed.png"
                width={100}
                height={100}
                alt="logo" />
            </Link>
          </div>
          {/* Inner box */}
          <div className='border-[1px] p-10 rounded-md bg-slate-100'>
            {/* word */}
            <div >
              <h2 className="text-2xl font-bold mb-3">Ready to take the next step?</h2>
              <span className='mb-3 font-bold'>Create an account or sign in.</span>
              <p className='mb-3  max-w-[450px]'>By creating an account or logging in,
                you understand and agree to Indeed <Link
                className='text-[#2557a7]' href="">Terms</Link>.
                You also acknowledge our<Link
                className='text-[#2557a7]' href=""> Cokie</Link> and
                <Link
                className='text-[#2557a7]' href=""> Privacy </Link>
                policies. You will receive marketing messages
                from Indeed and may opt out at any time by
                following the unsubscribe link in our messages,
                or as detailed in our terms.</p>
            </div>
      
            {/* Google/app link */}
            <div>
              <Link href="">
                <div className=' max-w-[480px] p-2 rounded-lg flex items-center mb-3 border-2 hover:bg-blue-100 hover:border-blue-400 '>
                  <Image src="/google.png"
                  width={30}
                  height={30}
                  alt="logo" />
                  <h2 className=' item-center ml-[5rem] font-bold'>Continue with Google</h2>
                </div>
              </Link>
              <Link href="">
                <div className=' max-w-[480px] p-2 rounded-lg flex items-center mb-3 border-2 hover:bg-blue-100 hover:border-blue-400 '>
                  <Image src="/apple.jpeg"
                  width={30}
                  height={30}
                  alt="logo" />
                  <h2 className=' item-center ml-[5rem] font-bold'>Continue with Apple</h2>
                </div>
              </Link>
            </div>
            {/* Email downword */}
            <div>
              <p className='font-bold'>Email address</p>
              <div className='max-w-[480px]  md:w-full md:mt-3  '>
              <div className=' flex items-center border-indigo-500/75 hover:box-content border-2 rounded-lg p-3 py-2 md:shadow-sm'>
                <input className=' flex-grow  text-gray-600 pl-5 bg-transparent outline-none' type="text" />
              </div>
              <button className='bg-[#2557a7] rounded-lg p-2  text-white font-bold border-2 mt-3 ml-[-2] outline-slate-1500 w-full'>Continue</button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Signinpage;