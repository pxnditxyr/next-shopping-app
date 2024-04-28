'use client'

import { getStockBySlug } from "@/actions"
import { titleFont } from "@/config"
import { useCallback, useEffect, useState } from "react"

interface IProps {
  slug: string
}

export const StockLabel = ( { slug }: IProps ) => {

  const [ stock, setStock ] = useState<number>( 0 )
  const [ isLoading, setIsLoading ] = useState<boolean>( true )

  const getStock = useCallback( async () => {
    const stock = await getStockBySlug( slug )
    setStock( stock )
    setIsLoading( false )
  }, [ slug ] )

  useEffect( () => {
    getStock()
  }, [ getStock ] )


  return (
    <p className={ `${ titleFont.className } antialiased font-bold text-md p-2` }>
      { ( isLoading )
        ? (
          <span className="animate-pulse bg-gray-400">
            &nbsp;
          </span>
        )
        : (
          <span>
            Stock: { stock }
          </span>
        ) 
      }
    </p>
  )
}
