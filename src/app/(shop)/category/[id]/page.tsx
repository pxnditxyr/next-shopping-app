import { ProductGrid, Title } from "@/components"
import { TValidCategory } from "@/interfaces"
import { initialData } from "@/seed"
import { notFound } from "next/navigation"

export const metadata = {
  title: 'Cartegory Page',
  description: 'Cartegory Page',
}

interface IProps {
  params: {
    id: TValidCategory
  }
}

export default function CartegoryPage ( { params }: IProps ) {

  const { id } = params
  const productsByCategory = initialData.products.filter(
    product => product.gender === id
  )

  const labels : Record<TValidCategory, string> = {
    'men': 'Men',
    'women': 'Women',
    'kid': 'Kids',
    'unisex': 'Unisex',
  }

  if ( productsByCategory.length === 0 ) {
    notFound()
  }

  return (
    <div className="">
      <Title
        title={ `${ labels[ id ] } Collection` }
        subtitle="Todos los productos"
      />
      <ProductGrid
        products={ productsByCategory }
      />
    </div>
  )
}
