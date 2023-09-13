import LeftSidebar from "@/components/LeftSidebar"
import { Inter } from "next/font/google"
import '@/app/styles.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className={`${inter.className} h-[50vh] w-full`}>
            <div className="flex gap-3">
               <LeftSidebar />

               {children}
            </div>

         </body>
      </html>
   )
}