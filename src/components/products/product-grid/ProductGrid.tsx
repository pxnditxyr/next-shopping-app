import { IProduct } from '@/interfaces'
import { ProductGridItem } from './ProductGridItem'

interface IProps {
  products: IProduct[]
}

export const ProductGrid = ( { products } : IProps ) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
      {
        products.map( ( product ) => (
          <ProductGridItem
            key={ product.slug }
            product={ product }
          />
        ) )
      }
    </div>
  )
}
