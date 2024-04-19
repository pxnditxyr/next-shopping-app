import { QuantitySelector, Title } from "@/components"
import { IProduct } from "@/interfaces"
import { initialData } from "@/seed"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

export const metadata = {
  title: 'Cart Page',
  description: 'Cart Page',
}

const productsInCart : IProduct[] = [
  initialData.products[ 0 ],
  initialData.products[ 1 ],
  initialData.products[ 2 ],
]

export default function CartPage () {

  if ( productsInCart.length === 0 ) redirect( '/empty' )

  return (
    <div className="flex justify-center items-center mb-72 px-10 w-full">
      <div className="flex flex-col gap-8">
        <Title title="Shopping Cart" />
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="flex flex-col mt-5 w-full md:w-1/2 gap-4">
            <span className="text-xl"> Add more items to your cart</span>
            <Link href="/" className="text-blue-500">Continue Shopping</Link>
            {
              productsInCart.map( product => (
                <div key={ product.slug } className="flex">
                  <Image
                    src={ `/products/${ product.images[ 0 ] }` }
                    alt={ product.title }
                    width={ 100 }
                    height={ 100 }
                    className="object-cover rounded"
                  />
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-lg">{ product.title }</p>
                    <span className="text-sm">${ product.price }</span>
                    <QuantitySelector quantity={ 3 } />
                    <button className="text-red-500 underline">Remove</button>
                  </div>
                </div>
              ) )
            }
          </div>
          <div className="bg-white rounded-xl shadow-xl p-7 flex flex-col gap-5 md:w-1/2">
            <h2 className="text-2xl"> Order Summary </h2>
            <div className="grid grid-cols-2">
              <span className="text-lg"> Product Quantity </span>
              <span className="text-right"> 3 items </span>

              <span className="text-lg"> Subtotal </span>
              <span className="text-right"> $300 </span>

              <span className="text-lg"> Shipping </span>
              <span className="text-right"> $0 </span>

              <span className="text-2xl py-4"> Total </span>
              <span className="text-2xl text-right py-4"> $300 </span>
            </div>
            <div className="w-full flex">
              <Link
                className="w-full bg-blue-500 text-white text-center py-2 rounded-xl"
                href="/checkout/address"
              > Proceed to Checkout </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
