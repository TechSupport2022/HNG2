import { fetchMovie } from "@/api"
import VideoContainer from "@/components/VideoContainer"



const page =  ({ params }: { params: {id: string} }) => {

   return (
      <div className="w-[80%] pr-4 videoContainer">
         <VideoContainer movieId={params.id} />
      </div>
   )
}

export default page
