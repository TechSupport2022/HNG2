import { imdb, tomato } from "@/assets"
import Image from "next/image"


const Rating = ({ score, tomatoeScore }: { score: string, tomatoeScore: string }) => {
   return (
      <div className="flex gap-4 my-2">
         <div className="flex gap-2">
            <Image
               src={imdb}
               alt="imdb"
            />

            {score}
         </div>

         <div className="flex gap-2">
            <Image
               src={tomato}
               alt="imdb"
            />

            {tomatoeScore}
         </div>
      </div>
   )
}

export default Rating
