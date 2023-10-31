import Link from 'next/link';
import React from 'react'

const Browsejob = () => {
  return (
    <div className='flex items-center justify-center py-8'>
        <div>
            <div>
                <h2 className='text-3xl font-bold mb-10'>Browse jobs</h2>
                <p className='font-bold mb-4'>Companies by letter</p>
                <div className=''>
                    <Link className='text-[#2557a7] mr-8' href=''>P</Link >
                    <Link className='text-[#2557a7] mr-8' href='' >B</Link >
                    <Link className='text-[#2557a7] mr-8' href='' >S</Link >
                    <Link className='text-[#2557a7] mr-8' href='' >D</Link >
                    <Link className='text-[#2557a7] mr-8' href='' >E</Link >
                    <Link className='text-[#2557a7] mr-8' href='' >G</Link >
                    <Link className='text-[#2557a7] mr-8' href='' >N</Link >
                </div> 
            </div>

            
            {/* 2nd link */}

            <div>
            
                <p className='mt-[4rem] font-bold'>Jobs by Title</p>
                <div className='mt-4 flex flex-col md:flex-row '>
                    <div>
                        <Link className='text-[#2557a7] mr-8' href='' >A</Link >
                        <Link className='text-[#2557a7] mr-8' href='' >B</Link >
                        <Link className='text-[#2557a7] mr-8' href='' >C</Link >
                        <Link className='text-[#2557a7] mr-8' href='' >D</Link >
                        <Link className='text-[#2557a7] mr-8' href='' >E</Link >
                        <Link className='text-[#2557a7] mr-8' href='' >F</Link >
                        <Link className='text-[#2557a7] mr-8' href='' >G</Link >
                        <Link className='text-[#2557a7] mr-8' href='' >H</Link >
                    </div>


                    <div>
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
                    </div>
                    <Link className='text-[#2557a7] ' href='' >Z</Link >
                </div>                  
            </div>

            {/* 3rd */}

            <div>
                <div >
                    <p className='mt-[4rem] font-bold mb-6'>Jobs by Region</p>
                    <div className='grid md:grid-cols-4' >


                        <div className='flex flex-col gap-6'>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Abia</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Adamawa</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Akwa Ibom</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Anambra</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Bauchi</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Benue</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Borno</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Cross River</Link>
                        </div>


                        <div className='flex flex-col gap-6'>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1 mt-6 md:mt-[-6px]' href=''>Delta</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Ebonyi</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Edo</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Ekiti</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Enugu</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Federal Capital Territory</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Gombe</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Imo</Link>
                        </div>


                        <div className='flex flex-col gap-6'>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1 mt-6 md:mt-[-6px]' href=''>Kaduna</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Kano</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Katsina</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Kebbi</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Kwara</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Lagos</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Nasarawa</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Niger</Link>
                        </div>


                        <div className='flex flex-col gap-6'>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1 mt-6 md:mt-[-6px]' href=''>Ogun</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Ondo</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Osun</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Oyo</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Plateau</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Rivers</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Sokoto</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Zamfara</Link>
                        </div>


                    </div>
                </div>
            </div>

            {/* 4th line */}

            <div>
                <div>
                    <p className='mt-[4rem] font-bold mb-6'>Jobs by Category</p>
                    <div className='grid md:grid-cols-4' >


                        <div className='flex flex-col gap-6'>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Accounting</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Administrative Assistance</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Agriculture & Forestry</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Architecture</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Arts & Entertainment</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Aviation</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Banking & Finance</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Beauty & Wellness</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Mathematics</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Mechanical Engineering</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Media & Communications</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Medical Information</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Personal Care & Home Health</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Pharmacy</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Physicians & Surgeons</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Production & Manufacturing</Link>
                        </div>


                        <div className='flex flex-col gap-6'>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1 mt-6 md:mt-[-6px]' href=''>Chemical Engineering</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Childcare</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Civil Engineering</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Cleaning & Sanitation</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Community & Social Service</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Construction</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Customer Service</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Dental</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Medical Technician</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Military</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Mining</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Nursing</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Security & Public Safety</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Social Science</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Software Development</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Social Science</Link>
                        </div>


                        <div className='flex flex-col gap-6'>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1 mt-6 md:mt-[-6px]' href=''>Driving</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Education & Instruction</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Electrical Engineering</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Food Preparation & Service</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Hospitality & Tourism</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Human Resources</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>IT Operations & Helpdesk</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Industrial Engineering</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Project Management</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Real Estate</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Retail</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Sales</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Scientific Research & Development</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Security & Public Safety</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Therapy</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Veterinary</Link>
                        </div>


                        <div className='flex flex-col gap-6'>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1 mt-6 md:mt-[-6px]' href=''>Information Design & Documentation</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Installation & Maintenance</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Insurance</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Legal</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Loading and Stocking</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Logistic Support</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Management</Link>
                            <Link className='text-[#2557a7] text-sm hover:underline underline-offset-1' href=''>Marketing</Link>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Browsejob;