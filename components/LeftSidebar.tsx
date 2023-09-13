'use client'


import { calendar, close, home, list, logout, projector, tv, tvshow } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

const nav = [
   {
      name: 'home',
      img: home
   },
   {
      name: "Movies",
      img: projector
   },
   {
      name: "Tv Series",
      img: tvshow
   },
   {
      name: "Upcoming",
      img: calendar
   }
]


const LeftSidebar = () => {
   const [sidebarViscible, setSidebarViscible] = useState(false);

   const handleOpenClose = () => {
      console.log("closed");
      setSidebarViscible((prev) => !prev)
   }

   return (
      <div className={`w-[20%] leftsidebar ${sidebarViscible ? 'viscibleSidebar' : 'closedSidebar'}`}>
         {sidebarViscible ?
            <div className='closeBtn'>
               <Image
                  src={close}
                  alt='close button'
                  width={40}
                  height={40}
                  onClick={handleOpenClose}
               />
            </div> :


            <div className='openBar'>
               <div className='openBtn'>
                  <Image
                     src={list}
                     alt='close button'
                     width={40}
                     height={40}
                     onClick={handleOpenClose}
                  />
               </div>

               <div className=' py-10'>
                  <div className='flex items-center px-5 gap-5 mb-5'>
                     <Image
                        src={tv}
                        alt='home'
                        width={50}
                        height={50}
                     />

                     <p className='text-xl'>Movie Box</p>
                  </div>

                  {nav.map((navItem: any) => (
                     <div key={`id-${navItem}`} className={`w-full px-3 ${navItem.name === "Movies" && 'bg-red-950 border-r-2 border-r-red-500 w-[100.5%]'}`}>
                        <div className={`flex gap-2 items-center p-3 px-5 cursor-pointer `}>
                           <Image
                              src={navItem.img}
                              alt={navItem.name}
                              width={30}
                              height={30}
                           />
                           <p className='text-base capitalize'>{navItem.name}</p>
                        </div>
                     </div>
                  ))}

                  <div className='py-8 px-10'>
                     <div className='p-3 border-2 rounded-xl'>
                        <p>Play movie quizes and earn free tickets</p>
                        <small>50k people playing</small>
                        <span>Start playing</span>
                     </div>
                  </div>

                  <div className='flex gap-2 items-center p-4 cursor-pointer'>
                     <Image
                        src={logout}
                        alt='logout'
                        width={30}
                        height={30}
                     />
                     <p>Log out</p>
                  </div>
               </div>
            </div>
         }




      </div>
   )
}

export default LeftSidebar
