'use client'

import Image from "next/image"
import Rating from "./Rating";
import { fetchGenres } from "@/api";

import { useEffect, useState } from 'react'


interface Props {
   genre_ids: [],
   id: number,
   original_title: string,
   popularity: number,
   poster_path: string,
   release_date: string,
   title: string,
   vote_average: number,
   vote_count: number,
   isSearch?: boolean
}

const FeatureCard = ({ genre_ids, id, original_title, popularity, poster_path, release_date, title, vote_average, vote_count, isSearch }: Props) => {

   // Construct the full image URL using the base URL and size
   const baseImageUrl = 'https://image.tmdb.org/t/p/';
   const imageSize = 'w500'; // Choose an appropriate image size
   const fullImageUrl = `${baseImageUrl}${imageSize}${poster_path}`;

   // console.log(`This is genre_id: ${genre_ids}`)

   const genre = fetchGenres(genre_ids)
   // console.log(`genre: ${genre}`);

   const customAttribute1 = 'data-testid';
   const customValue1 = 'movie-card';

   const testId = 'data-testid';
   const generic_poster = 'movie-poster';
   const generic_title = 'movie-title';
   const generic_date = 'movie-release-date';

   return (
      <div className="w-[100%]" {...{ [customAttribute1]: customValue1 }}>
         <div className="feature-image-container mb-2" >
            <img
               src={fullImageUrl}
               alt={title}
               className="rounded-md"
               {...{ [testId]: generic_poster }}
            />
         </div>
         <p {...{ [testId]: generic_date }}>{release_date}</p>
         <h2 {...{ [testId]: generic_title }}>{title}</h2>
         <Rating score="80/100" tomatoeScore="200" />
         <div className="flex justify-between items-center">
            {genre.map((genre: string) => (
               <div key={`id-${genre}`} >
                  <p>{genre}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default FeatureCard
