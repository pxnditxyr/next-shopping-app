'use client'

import { Title } from "@/components"
import { useEffect } from "react"

interface IProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ShopError ( { error, reset } : IProps ) {

  useEffect( () => {
    console.error( error )
  }, [ error ] )

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Title title="Error" className="text-red-700" />
      <p
        className="text-xl text-center text-gray-900 p-4 font-semibold text-pretty"
      >
        It seems there was an error fetching the products. Please try again later.
      </p>
      <p className="text-sm text-gray-700">
        { error.message }
      </p>
    </div>
  )
}
