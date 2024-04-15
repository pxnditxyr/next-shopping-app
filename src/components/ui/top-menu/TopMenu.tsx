import { titleFont } from '@/config'
import Link from 'next/link'

export const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href="/">
          <span className={ `${ titleFont.className } antialiased font-bold` }>
            <span className="text-4xl">🐼</span>
            <span className="text-2xl">Pxndxs</span>
          </span>
        </Link>
      </div>
    </nav>
  )
}
