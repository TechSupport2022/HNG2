'use client'


import * as api from '@/api/index'
import Link from "next/link"
import FeatureCard from './FeatureCard'
import { useEffect, useState } from 'react'


const Features = ({ searchData }: any) => {
   const [movies, setData]: any = useState(null);

   const customAttribute1 = 'data-testid';
   const customValue1 = 'movie-card';

   const testId = 'data-testid';
   const generic_poster = 'movie-poster';
   const generic_title = 'movie-title';
   const generic_date = 'movie-release-date';

   //    The Card component should display the movie title and release date.

   // card - [data - testid: movie - card]
   // movie poster - [data - testid: movie - poster]
   // movie title - [data - testid: movie - title]
   // movie release date - [data - testid: movie - release - date]


   useEffect(() => {
      const fetchData = async () => {
         const movies = await api.fetchMovies()

         setData(movies);
      };

      fetchData();
   }, []);


   return (
      <div className="features-container">
         <div className="flex justify-between items-center mb-3">
            <h1>Featured Movie</h1>
            <p className='cursor-pointer'> {`see more >`} </p>
         </div>


         <div className='flex gap-5 items-center flex-wrap featureCardWrapper'>
            {searchData ? searchData.results.map((movie: any) => (
               <div {...{ [customAttribute1]: customValue1 }}>
                  <Link href={`/movie/${movie.id}`} className="w-[23.5%] feature">
                     <FeatureCard
                        key={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        original_title={movie.original_title}
                        genre_ids={movie.genre_ids}
                        id={movie.id}
                        popularity={movie.popularity}
                        release_date={movie.release_date}
                        vote_average={movie.vote_average}
                        vote_count={movie.vote_count}
                        isSearch
                     />
                  </Link>
               </div>
            )) : movies?.results.slice(0, 10).map((movie: any) => (
               <Link href={`/movie/${movie.id}`} className="w-[23.5%]">
                  <FeatureCard
                     key={movie.id}
                     poster_path={movie.poster_path}
                     title={movie.title}
                     original_title={movie.original_title}
                     genre_ids={movie.genre_ids}
                     id={movie.id}
                     popularity={movie.popularity}
                     release_date={movie.release_date}
                     vote_average={movie.vote_average}
                     vote_count={movie.vote_count}
                  />
               </Link>
            ))}
         </div>
      </div>
   )
}

export default Features
