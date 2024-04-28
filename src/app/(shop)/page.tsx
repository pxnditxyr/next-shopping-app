export const revalidate = 60

import { getPaginatedProductsWithImages } from '@/actions'
import { Pagination, ProductGrid, Title } from '@/components'
import { redirect } from 'next/navigation'

interface IProps {
  searchParams: {
    page?: string
  }
}

export default async function Home ( { searchParams } : IProps ) {

  const page = searchParams.page ? parseInt( searchParams.page ) : 1

  const { products, totalPages } = await getPaginatedProductsWithImages({ page })

  if ( products.length === 0 ) {
    redirect( '/' )
  }

  return (
    <div className="">
      <Title
        title="Tienda"
        subtitle="Todos los productos"
      />
      <ProductGrid
        products={ products }
      />

      <Pagination totalPages={ totalPages } />
    </div>
  )
}
