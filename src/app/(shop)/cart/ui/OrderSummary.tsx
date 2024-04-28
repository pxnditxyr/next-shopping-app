'use client'
import { useCartStore } from "@/store"
import { currencyFormat } from "@/utils"
import { useEffect, useState } from "react"

export const OrderSummary = () => {

  const { itemsInCart, subTotal, tax, total } = useCartStore( ( state ) => state.getSummaryInformation() )

  const [ loaded, setLoaded ] = useState( false )

  useEffect( () => {
    setLoaded( true )
  }, [] )

  if ( !loaded ) {
    return (
      <div className="flex justify-center items-center">
        <h2 className="text-2xl animate-pulse">Loading...</h2>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2">
      <span className="text-lg"> Product Quantity </span>
      <span className="text-right"> { itemsInCart === 1 ? `${ itemsInCart } item` : `${ itemsInCart } items` } </span>

      <span className="text-lg"> Subtotal </span>
      <span className="text-right"> { currencyFormat( subTotal ) } </span>

      <span className="text-lg"> Tax </span>
      <span className="text-right"> { currencyFormat( tax ) } </span>

      <span className="text-2xl py-4"> Total </span>
      <span className="text-2xl text-right py-4"> { currencyFormat( total ) } </span>
    </div>
  )
}
