import { Title } from '@/components'
import { initialData } from '@/seed'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { IoCardOutline } from 'react-icons/io5'

interface IProps {
  params: {
    id: string
  }
}

export const metadata = {
  title: 'Order #123',
  description: 'Order #123',
}

const productsInCart = [
  initialData.products[ 0 ],
  initialData.products[ 1 ],
  initialData.products[ 2 ],
]

export default function OrderPage ( { params } : IProps ) {
  const { id } = params

  // TODO: Verify
  // redirect

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0 w-full">
      <div className="w-[1000px] flex flex-col">
        <Title title={ `Order #${ id }` } />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5 gap-4">
            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white gap-4",
                {
                  'bg-red-500': true,
                  'bg-green-500': false,
                }
              )
            }>
              <IoCardOutline size={ 30 } />
              {/* <span> Payment Confirmed </span> */}
              <span> Payment Pending </span>
            </div>
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
            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white gap-4",
                {
                  'bg-red-500': true,
                  'bg-green-500': false,
                }
              )
            }>
              <IoCardOutline size={ 30 } />
              {/* <span> Payment Confirmed </span> */}
              <span> Payment Pending </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
