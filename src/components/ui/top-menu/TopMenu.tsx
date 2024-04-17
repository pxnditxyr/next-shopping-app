import { titleFont } from '@/config'
import Link from 'next/link'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

export const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full bg-gray-900 text-white">
      <div>
        <Link href="/">
          <span className={ `${ titleFont.className } antialiased font-bold` }>
            <span className="text-4xl">🐼</span>
            <span className="text-2xl">Pxndxs</span>
          </span>
        </Link>
      </div>
      <div className="gap-5 hidden sm:flex">
        <Link href="/category/men" className="p-2 rounded-md transition-all hover:bg-gray-100 hover:text-gray-900">
          Men
        </Link>
        <Link href="/category/women" className="p-2 rounded-md transition-all hover:bg-gray-100 hover:text-gray-900">
          Women
        </Link>
        <Link href="/category/kids" className="p-2 rounded-md transition-all hover:bg-gray-100 hover:text-gray-900">
          Kids
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <Link href="/search" className="p-2 rounded-md transition-all hover:bg-gray-100 hover:text-gray-900">
          <IoSearchOutline className="w-5 h-5"/>
        </Link>
        <Link href="/cart" className="p-2 rounded-md transition-all hover:bg-gray-100 hover:text-gray-900">
          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
            <IoCartOutline className="w-5 h-5"/>
          </div>
        </Link>

        <button className="p-2 rounded-md transition-all hover:bg-gray-100 hover:text-gray-900">
          Menu
        </button>
      </div>
    </nav>
  )
}
