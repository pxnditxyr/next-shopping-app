'use client'
import { useCartStore } from '@/store'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'



export const ShoppingCartButton = () => {

  const [ loaded, setLoaded ] = useState( false )
  const totalItemInCart = useCartStore( ( state ) => state.getTotalItems() )

  useEffect( () => {
    setLoaded( true )
  }, [] )

  return (
    <Link
      href={ ( totalItemInCart > 0 && loaded )
        ? '/cart'
        : '/empty'
      }
      className="p-2 rounded-md transition-all hover:bg-gray-100 hover:text-gray-900"
    >
      <div className="relative">
        {
          ( loaded && totalItemInCart > 0 ) && (
            <span className="fade-in absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              { totalItemInCart }
            </span>
          )
        }
        <IoCartOutline className="w-5 h-5"/>
      </div>
    </Link>
  )
}
