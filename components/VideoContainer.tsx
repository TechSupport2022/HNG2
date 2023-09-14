import { fetchCrew, fetchMovie } from "@/api"
import { expand, heart, list, play, twotickets } from "@/assets";
import Image from "next/image"


const VideoContainer = async ({ movieId }: any) => {
   const movieDetails = await fetchMovie(movieId)
   const crewInfo = await fetchCrew(movieId)
   const d = new Date(movieDetails.release_date)
   const date = d.getTime()

   // Construct the full image URL using the base URL and size
   const baseImageUrl = 'https://image.tmdb.org/t/p/';
   const imageSize = 'w1280'; // Choose an appropriate image size
   const poster_path = movieDetails.poster_path;
   const fullImageUrl = `${baseImageUrl}${imageSize}${poster_path}`;

   const customAttribute1 = 'data-testid';
   const customValue1 = 'movie-card';

   const testId = 'data-testid';
   const generic_poster = 'movie-poster';
   const generic_overview = 'movie-overview';
   const generic_runtime = 'movie-runtime';
   const generic_title = 'movie-title';
   const generic_date = 'movie-release-date';

   //    I should see

   // #   title - [data - testid: movie - title] 
   // #  release date(in UTC) - [data - testid: movie - release - date]
   // #  runtime(in minutes) - [data - testid: movie - runtime]
   //    overview - [data - testid: movie - overview]
   return (
      <div className="w-[100%] h-[100vh] rounded-lg relative">
         <div className="w-[100%] h-[90%] movieDetailsHeader py-3">
            <img
               src={fullImageUrl}
               alt={movieDetails.title}
               className="w-[100%] h-[100%] object-cover rounded-lg hover:cursor-pointer hover:opacity-90"
            />
         </div>

         <div className="absolute top-[35%] left-[45%] playBtn">
            <Image
               src={play}
               alt="play"
               width={100}
               height={100}
            />
         </div>

         <div className="flex justify-between items-center px-3 movie-quote">
            <div className="movie-desc flex items-center justify-start gap-3">
               <p {...{ [testId]: generic_title }} className="font-bold flex items-center justify-start gap-3">
                  {movieDetails.title}
               </p>
               <span className="text-xl font-bold translate-y-[-5px]">.</span>
               <p {...{ [testId]: generic_date }} className="font-bold flex items-center justify-start gap-3">
                  {date}
               </p>
               <span className="text-xl font-bold translate-y-[-5px]">.</span>
               <p className="font-bold flex items-center justify-start gap-3">
                  {movieDetails.adult === false ? 'PG-13' : 'Adult'}
               </p>
               <span className="text-xl font-bold translate-y-[-5px]">.</span>
               <div className="flex gap-3">
                  <p {...{ [testId]: generic_runtime }} className="font-bold flex items-center justify-start gap-3">
                     {movieDetails.runtime}
                  </p>
                  <p>min</p>
               </div>

               {movieDetails.genres.map((movieDetail: { id: number, name: string }) => (
                  <p key={`id-${movieDetail.name}`} className="font-bold flex items-center justify-start gap-3">
                     {movieDetail.name}
                     <span className="text-xl font-bold translate-y-[-5px]">.</span>
                  </p>

               ))}
            </div>

            <div className="star flex gap-3 items-center justify-center">
               <Image
                  src={heart}
                  alt="heart"
                  width={24}
                  height={24}
               />
               {movieDetails.vote_average.toFixed(2)} | {Math.round(movieDetails.vote_count / 1000)}k
            </div>
         </div>

         <div className="flex gap-3 my-5 movieDesc">
            <div className="movie-desc-text flex-[0.8]">
               <p {...{ [testId]: generic_overview }} className="mb-3">
                  {movieDetails.overview}
               </p>

               <div className="mt-10 mb-5">
                  <div className="my-3 flex gap-3 justify-start items-center">
                     Directors: {crewInfo?.directors.map(((director: any) => (
                        <span key={`id-${director.name}`} className="text-sm text-red-400">{director.name}</span>
                     )))}
                  </div>

                  <div className="my-3 flex gap-3 justify-start items-center">
                     Writers: {crewInfo?.writers.map(((writer: any) => (
                        <span key={`id-${writer.name}`} className="text-sm text-red-400">{writer.name}</span>
                     )))}
                  </div>


                  <div className="my-3 flex gap-3 justify-start items-center">
                     Stars: {crewInfo?.stars.map(((star: any) => (
                        <span key={`id-${star.name}`} className="text-sm text-red-400">{star.name}</span>
                     )))}
                  </div>

               </div>

               <div className="flex overflow-hidden rounded-md">
                  <div className="bg-red-700 p-3">
                     <p>Top rated movie</p>
                  </div>
                  <div className="p-3 flex flex-1 justify-between border-2">
                     <p className="">Awards</p>
                     <div className="flex-2 flex justify-end">
                        <Image
                           src={expand}
                           alt="expand-section"
                           width={24}
                           height={24}
                        />
                     </div>

                  </div>
               </div>
            </div>
            <div className="movie-details text-center flex-[0.4] flex flex-col gap-3">
               <div className="flex gap-3 justify-center items-center bg-red-700 p-3 rounded-lg">
                  <Image
                     src={twotickets}
                     alt="ticket"
                     width={24}
                     height={24}
                  />
                  <p>see showing times</p>
               </div>
               <div className="flex gap-3 justify-center items-center bg-red-200 p-3 rounded-lg text-black border-2 border-red-500">
                  <Image
                     src={list}
                     alt="ticket"
                     width={24}
                     height={24}
                  />
                  <p>More wotching options</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default VideoContainer
