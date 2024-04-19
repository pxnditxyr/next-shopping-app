import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from '@/components'
import { titleFont } from '@/config'
import { initialData } from '@/seed'
import { notFound } from 'next/navigation'

interface IProps {
  params: {
    slug: string
  }
}

export const metadata = {
  title: 'Product #1',
  description: 'Product #1',
}

export default function ProductPage ( { params }: IProps ) {

  const { slug } = params

  const product = initialData.products.find( product => product.slug === slug )

  if ( !product ) {
    notFound()
  }

  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-1 md:col-span-2">
        <ProductMobileSlideshow
          title={ product.title }
          images={ product.images }
          className="block md:hidden"
        />
        <ProductSlideshow
          title={ product.title }
          images={ product.images }
          className="hidden md:block"
        />
      </div>
      <div className="col-span-1 px-5 flex flex-col gap-6">
        <h1 className={ `${ titleFont.className } antialiased font-bold text-xl p-2` }>
          { product.title }
        </h1>
        <p className="text-lg p-4">
          ${ product.price }
        </p>

        <SizeSelector
          selectedSize={ product.sizes[ 0 ] }
          availableSizes={ product.sizes }
        />

        <QuantitySelector
          quantity={ 1 }
        />

        <button className="bg-gray-900 text-white p-2 rounded-md mb-4">
          Add to cart
        </button>

        <h3 className="font-bold text-sm"> Description </h3>
        <p className="font-light">
          { product.description }
        </p>
      </div>
    </div>
  )
}
