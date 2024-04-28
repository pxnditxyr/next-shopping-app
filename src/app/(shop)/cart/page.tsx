import { Title } from '@/components'
import Link from 'next/link'
import { ProductsInCart } from './ui/ProductsInCart'
import { OrderSummary } from './ui/OrderSummary'

export const metadata = {
  title: 'Cart Page',
  description: 'Cart Page',
}

export default function CartPage () {

  // if ( productsInCart.length === 0 ) redirect( '/empty' )

  return (
    <div className="flex justify-center items-center mb-72 px-10 w-full">
      <div className="flex flex-col gap-8">
        <Title title="Shopping Cart" />
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="flex flex-col mt-5 w-full md:w-1/2 gap-4">
            <span className="text-xl"> Add more items to your cart</span>
            <Link href="/" className="text-blue-500">Continue Shopping</Link>
            
            <ProductsInCart />
          </div>
          <div className="bg-white rounded-xl shadow-xl p-7 flex flex-col gap-5 md:w-1/2">
            <h2 className="text-2xl"> Order Summary </h2>
            <OrderSummary />
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
