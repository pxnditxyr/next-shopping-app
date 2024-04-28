'use client'
import { QuantitySelector, SizeSelector } from "@/components"
import { ICartItem, IProduct, TValidSizes } from "@/interfaces"
import { useCartStore } from "@/store"
import { useState } from "react"

interface IProps {
  product: IProduct
}

export const AddToCart = ( { product } : IProps ) => {

  const addProductToCart = useCartStore( ( state ) => state.addProductToCart )
  const [ size, setSize ] = useState<TValidSizes | undefined>()
  const [ quantity, setQuantity ] = useState<number>( 1 )
  const [ posted, setPosted ] = useState<boolean>( false )

  const onSelectSize = ( size: TValidSizes ) => {
    setSize( size )
  }

  const onQuantityChange = ( quantity: number ) => {
    setQuantity( quantity )
  }

  const addToCart = () => {
    setPosted( true )

    if ( !size ) return

    const cartProduct : ICartItem = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity,
      size,
      image: product.images[0]
    }

    addProductToCart( cartProduct )
    setPosted( false )
    setQuantity( 1 )
    setSize( undefined )
  }

  return (
    <>
      {
        ( posted ) && ( !size ) && (
          <span className="text-red-500 fade-in">Please select a size</span>
        )
      }
      <SizeSelector
        selectedSize={ size }
        availableSizes={ product.sizes }
        onSelectSize={ onSelectSize }
      />

      <QuantitySelector
        quantity={ quantity }
        onQuantityChange={ onQuantityChange }
      />

      <button
        className="bg-gray-900 text-white p-2 rounded-md mb-4"
        onClick={ addToCart }
      >
        Add to cart
      </button>
    </>
  )
}

