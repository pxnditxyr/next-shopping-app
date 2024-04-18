import { TValidSizes } from '@/interfaces'
import clsx from 'clsx'

interface IProps {
  selectedSize: TValidSizes
  availableSizes: TValidSizes[]
}

export const SizeSelector = ( { selectedSize, availableSizes }: IProps ) => {

  return (
    <div className="py-2">
      <h3 className="font-bold"> Available sizes </h3>
      <div className="flex gap-2">
        {
          availableSizes.map( size => (
            <button
              key={ size }
              className={
                clsx(
                  'p-2 rounded-md',
                  selectedSize === size ? 'bg-gray-900 text-white' : 'bg-gray-200',
                  'hover:bg-gray-900 hover:text-white transition-all'
                )
              }
            >
              { size }
            </button>
          ) )
        }
      </div>
    </div>
  )
}
