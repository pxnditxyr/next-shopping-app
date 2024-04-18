import { ProductGrid, Title } from '@/components'
import { initialData } from '@/seed'

const products = initialData.products

export default function Home() {
  return (
    <div className="">
      <Title
        title="Tienda"
        subtitle="Todos los productos"
      />
      <ProductGrid
        products={ products }
      />
    </div>
  )
}
