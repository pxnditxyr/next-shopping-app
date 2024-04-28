'use client'

import { QuantitySelector } from '@/components'
import { useCartStore } from '@/store'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const ProductsInCart = () => {

  const updateProductQuantity = useCartStore( ( state ) => state.updateProductQuantity )
  const removeProductFromCart = useCartStore( ( state ) => state.removeProductFromCart )
  const [ loaded, setLoaded ] = useState( false )
  const productsInCart = useCartStore( ( state ) => state.cart )

  useEffect( () => {
    setLoaded( true )
  }, [] )

  if ( !loaded ) {
    return (
      <div className="flex justify-center items-center">
        <h2 className="text-2xl">No items in your cart</h2>
      </div>
    )
  }

  return (
    <>
      {
        productsInCart.map( product => (
          <div key={ `${ product.slug }-${ product.size }` } className="flex">
            <Image
              src={ `/products/${ product.image }` }
              alt={ product.title }
              width={ 100 }
              height={ 100 }
              className="object-cover rounded"
            />
            <div className="flex flex-col items-start gap-4">
              <Link className="text-lg hover:underline hover:text-blue-500" href={ `/product/${ product.slug }` }>
                { product.title }
              </Link>
              <span className="text-sm">${ product.price }</span>
              <QuantitySelector
                quantity={ product.quantity }
                onQuantityChange={ ( quantity ) => updateProductQuantity( product, quantity ) }
              />
              <button
                className="text-red-500 underline"
                onClick={ () => removeProductFromCart( product ) }
              >Remove</button>
            </div>
          </div>
        ) )
      }
    </>
  )
}
