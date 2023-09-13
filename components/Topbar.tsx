// 'use client'

import '@/app/styles.css'
import { menu, search, tmnt, tv } from '@/assets'
import Image from 'next/image'
import Rating from './Rating'
import { fetchMovie, fetchMovies, searchMovie } from '@/api'
import { useEffect, useState } from 'react'

// import * as api from '@/api/index'


const Topbar = ({setMovieSearchResult}: any) => {
   const [searchQuery, setSearchQuery] = useState('')
   const [headerInfo, setHeaderInfo]: any = useState()
   
   
   const isSearchQuery = false

   // fetch search and append it to parent
   const handleSearch = () => {
      searchMovie(searchQuery)
        .then(response => {
          setMovieSearchResult(response);
        })
        .catch(error => {
          // Handle errors here
          console.error("Error:", error);
        });
    }

   useEffect(() => {
      const fetchData = async () => {
         const headerInfo = await fetchMovies()
         setHeaderInfo(headerInfo)
         console.log(headerInfo)
      }
      fetchData();
   }, [])

   return (
      <header className="header">
         <nav className='navbar'>
            <div className='logo'>
               <Image
                  src={tv}
                  alt='logo'
                  width={40}
                  height={40}
                  objectFit='contain'
               />
               <p>MovieBox</p>
            </div>
            <div className='search-bar'>
               <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" name="" id="" placeholder='What do you want to watch' />
               <Image
                  src={search}
                  alt='search'
                  width={24}
                  height={24}
                  onClick={() => handleSearch()}
                  className='cursor-pointer'
               />
            </div>
            <div className='menu'>
               <Image
                  src={menu}
                  alt='menu'
               />
               <p>Sign in</p>
            </div>
         </nav>

         <div className='desc'>
            <h1>{headerInfo?.results[0].title}</h1>
            <p>{headerInfo?.results[0].overview}</p>

            <Rating score={"86/100"} tomatoeScore={"96%"} />

            <button className='flex gap-2 mt-2'>
               <Image src={tv} alt='' width={24} height={24} />
               Watch Trailer
            </button>
         </div>
      </header>
   )
}

export default Topbar
