import { titleFont } from '@/config'
import Link from 'next/link'
import { IoSearchOutline } from 'react-icons/io5'
import { OpenMenuButton } from './OpenMenuButton'
import { ShoppingCartButton } from './ShoppingCartButton'

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
        <Link href="/gender/men" className="p-2 rounded-md transition-all hover:bg-gray-100 hover:text-gray-900">
          Men
        </Link>
        <Link href="/gender/women" className="p-2 rounded-md transition-all hover:bg-gray-100 hover:text-gray-900">
          Women
        </Link>
        <Link href="/gender/kid" className="p-2 rounded-md transition-all hover:bg-gray-100 hover:text-gray-900">
          Kid
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <Link href="/search" className="p-2 rounded-md transition-all hover:bg-gray-100 hover:text-gray-900">
          <IoSearchOutline className="w-5 h-5"/>
        </Link>
        
        <ShoppingCartButton />

        <OpenMenuButton />
      </div>
    </nav>
  )
}
