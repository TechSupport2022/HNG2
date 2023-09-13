'use client'

// import * as api from '@/api/index'
import Bottombar from "./Bottombar"
import Features from "./Features"
import Topbar from "./Topbar"
import { useEffect ,useState } from "react"


const MainWrapper = () => {   
   const [movieSearchResult, setMovieSearchResult] = useState('')
   
   useEffect(() => {
      console.log('Search result:', movieSearchResult)

   }, [movieSearchResult])

   return (
      <div>
         <Topbar setMovieSearchResult={setMovieSearchResult}/>

         <main>
            <section>
               <div>
                  <Features searchData={movieSearchResult} />
               </div>
            </section>
         </main>

         <Bottombar />
      </div>
   )
}

export default MainWrapper

