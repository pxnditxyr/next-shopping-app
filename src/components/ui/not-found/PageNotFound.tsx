import { titleFont } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import { IoHomeSharp } from 'react-icons/io5'

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center p-5 flex flex-col gap-5">
        <h1
          className={ `${ titleFont.className } antialiased font-bold text-9xl` }
        > 404 </h1>
        <p className="text-xl font-semibold"> Whoops! Page not found </p>
        <p className="font-light"> The page you are looking for might have been removed, had its name changed or is temporarily unavailable. </p>
        <div>
          <Link
            href="/"
            className="text-xl flex font-semibold items-center justify-center gap-2 p-2 rounded-md transition-all hover:underline hover:text-blue-500"
          >
            Go back to the home page <IoHomeSharp className="w-10 h-10 text-gray-900"/>
          </Link>

        </div>
      </div>

      <div className="p-5">
        <Image 
          src="/imgs/starman_750x750.png"
          alt="Starman"
          className="p-5 sm:p-0"
          width={ 550 }
          height={ 550 }
        />
      </div>
    </div>
  )
}
