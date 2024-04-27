import Link from "next/link"
import { IoCartOutline } from "react-icons/io5"

export const metadata = {
  title: 'Empty Page',
  description: 'Empty Page',
}

export default function EmptyPage () {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[800px] gap-8 sm:flex-row">
      <IoCartOutline size={ 100 } />
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-xl font-semibold"> Your cart is empty </h1>
        <Link href="/" className="text-blue-500 text-4xl"> Continue Shopping </Link>
      </div>
    </div>
  )
}
