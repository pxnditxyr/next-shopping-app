'use client'

import { useState } from "react"
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"

interface IProps {
  quantity: number
}

export const QuantitySelector = ( { quantity } : IProps ) => {

  const [ count, setCount ] = useState( quantity )

  const onQuantityChange = ( value : number ) => {
    if ( count + value < 1 ) return
    setCount( count + value )
  }

  return (
    <div className="flex flex-row items-center gap-2">
      <button className="p-2 rounded-full" onClick={ () => onQuantityChange( -1 ) }>
        <IoRemoveCircleOutline size={ 30 } />
      </button>

      <span className="bg-gray-400 p-2 rounded-md">{ count }</span>

      <button className="p-2 rounded-full" onClick={ () => onQuantityChange( 1 ) }>
        <IoAddCircleOutline size={ 30 } />
      </button>
    </div>
  )
}
