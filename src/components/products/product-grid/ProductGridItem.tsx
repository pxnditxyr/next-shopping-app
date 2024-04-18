'use client'
import { IProduct } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface IProps {
  product: IProduct
}

export const ProductGridItem = ( { product } : IProps ) => {

  const [ displayImage, setDisplayImage ] = useState( product.images[ 0 ] )

  const handleMouseEnter = ( index : number ) => {
    setDisplayImage( product.images[ index ] )
  }

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={ `/product/${ product.slug }` }>
        <Image
          src={ `/products/${ displayImage }` }
          alt={ product.title }
          className="w-full object-cover rounded"
          width={ 500 }
          height={ 500 }
          onMouseEnter={ () => handleMouseEnter( 1 ) }
          onMouseLeave={ () => handleMouseEnter( 0 ) }
        />
      </Link>
      <div className="p-4 flex flex-col">
        <Link
          href={ `/product/${ product.slug }` }
          className="hover:text-blue-500 text-lg"
        >
          { product.title }
        </Link>
        <span className="font-bold">
          ${ product.price }
        </span>
      </div>
    </div>
  )
}
