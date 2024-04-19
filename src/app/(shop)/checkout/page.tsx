import { Title } from '@/components'
import { initialData } from '@/seed'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Checkout Page',
  description: 'Checkout Page',
}

const productsInCart = [
  initialData.products[ 0 ],
  initialData.products[ 1 ],
  initialData.products[ 2 ],
]

export default function CheckoutPage () {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0 w-full">
      <div className="w-[1000px] flex flex-col">
        <Title title="Checkout Order" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl"> Verify your order </span>
            <Link href="/cart" className="text-blue-500"> Change items in your cart </Link>
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
                    <span className="text-sm">${ product.price } x 3</span>
                    <span className="font-bold text-sm"> Subtotal: ${ product.price * 3 }</span>
                    <button className="text-red-500 underline">Remove</button>
                  </div>
                </div>
              ) )
            }
          </div>
          <div className="bg-white rounded-xl shadow-xl p-7 flex flex-col gap-5">
            <h2 className="text-2xl font-bold"> Delivery Address </h2>
            <div className="flex flex-col gap-2">
              <span className="text-lg"> Pxndxs R. </span>
              <span className="text-lg"> 1234 Main St. </span>
              <span className="text-lg"> Apt 123 </span>
              <span className="text-lg"> New York, NY 10001 </span>
              <span className="text-lg"> PC: 10001 </span>
              <span className="text-lg"> United States </span>
            </div>
            <div className="w-full h-px rounded bg-gray-300"></div>
            <h2 className="text-2xl font-bold"> Order Summary </h2>
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
            <div className="w-full flex flex-col gap-4">
              <span className="text-sm text-gray-500">
                By clicking on the Confirm Order button, you agree to our Terms and Conditions & Privacy Policy.
                <Link href="/terms" className="text-blue-500 underline"> Read more</Link>
              </span>
              <Link
                className="w-full bg-blue-500 text-white text-center py-2 rounded-xl"
                href="/orders/123"
              > Confirm Order </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
