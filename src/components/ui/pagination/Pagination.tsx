'use client'
import { generatePaginationNumbers } from '@/utils'
import clsx from 'clsx'
import Link from 'next/link'
import { redirect, usePathname, useSearchParams } from 'next/navigation'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

interface IProps {
  totalPages:  number
}

export const Pagination = ( { totalPages } : IProps ) => {

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const pageString = searchParams.get( 'page' ) ?? 1
  const currentPage = isNaN( Number( pageString ) ) ? 1 : Number( pageString )

  if ( currentPage < 1 || isNaN( currentPage ) ) {
    redirect( `${ pathname }` )
  }

  const allPages = generatePaginationNumbers( currentPage, totalPages )

  const createPageUrl = ( pageNumber : number | string ) => {

    const params = new URLSearchParams( searchParams )

    if ( pageNumber === '...' ) 
      return `${ pathname }?${ params.toString() }`

    if ( Number( pageNumber ) <=  0 )
      return `${ pathname }`
  
    if ( Number( pageNumber ) > totalPages )
      return `${ pathname }?${ params.toString() }`

    params.set( 'page', pageNumber.toString() )
    return `${ pathname }?${ params.toString() }`
    
  }

  return (
    <div className="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item">
            <Link
              className={
// disabled design: "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 focus:shadow-none"
                  // enabled design "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                clsx(
                  "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                  {
                    'text-gray-500 pointer-events-none': currentPage === 1,
                  }
                )
              }
              href={ createPageUrl( currentPage - 1 ) }
            >
              <IoChevronBackOutline size={ 30 } />
            </Link>
          </li>
          {
            allPages.map( ( page ) => (
              <li key={ page } className="page-item">
                <Link
                  className={
                    clsx(
                      "page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                      {
                        'bg-blue-600 text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md': page === currentPage,
                        'pointer-events-none': page === '...'
                      }
                    )
                  }
                  href={ createPageUrl( page ) }
                >
                  { page }
                </Link>
              </li>
            ) )
          }
          <li className="page-item">
            <Link
              className={
                clsx(
                  "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                  {
                    'text-gray-500 pointer-events-none': currentPage === totalPages,
                  }
                )
              }
              href={ createPageUrl( currentPage + 1 ) }
            >
              <IoChevronForwardOutline size={ 30 } />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
