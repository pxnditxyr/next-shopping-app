
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"

interface IProps {
  quantity: number
  onQuantityChange: ( quantity : number ) => void
}

export const QuantitySelector = ( { quantity, onQuantityChange } : IProps ) => {

  const onChangeValue = ( value : number ) => {
    if ( quantity + value < 1 ) return
    onQuantityChange( quantity + value )
  }

  return (
    <div className="flex flex-row items-center gap-4">
      <button className="rounded-full" onClick={ () => onChangeValue( -1 ) }>
        <IoRemoveCircleOutline size={ 30 } />
      </button>

      <span className="bg-gray-400 p-2 rounded-md">{ quantity }</span>

      <button className="rounded-full" onClick={ () => onChangeValue( 1 ) }>
        <IoAddCircleOutline size={ 30 } />
      </button>
    </div>
  )
}
