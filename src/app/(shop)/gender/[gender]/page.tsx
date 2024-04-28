export const revalidate = 60

import { getPaginatedProductsWithImages } from "@/actions"
import { Pagination, ProductGrid, Title } from "@/components"
import { TValidCategory } from "@/interfaces"
import { Gender } from "@prisma/client"
import { notFound } from "next/navigation"

export const metadata = {
  title: 'Gender Page',
  description: 'Gender Page',
}

interface IProps {
  params: {
    gender: string
  },
  searchParams: {
    page?: string
  }
}

export default async function CartegoryPage ( { params, searchParams }: IProps ) {

  const page = searchParams.page ? parseInt( searchParams.page ) : 1

  const { gender } = params
  const { products, totalPages } = await getPaginatedProductsWithImages({
    gender: gender as Gender,
    page
  })

  const labels : Record<TValidCategory, string> = {
    'men': 'Men',
    'women': 'Women',
    'kid': 'Kids',
    'unisex': 'Unisex',
  }

  if ( products.length === 0 ) {
    notFound()
  }

  return (
    <div className="">
      <Title
        title={ `${ labels[ gender as TValidCategory ] } Collection` }
        subtitle="Todos los productos"
      />
      <ProductGrid
        products={ products }
      />

      <Pagination totalPages={ totalPages } />
    </div>
  )
}
