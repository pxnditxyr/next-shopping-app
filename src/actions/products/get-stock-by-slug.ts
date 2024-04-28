'use server'

import { prisma } from '@/lib'
import { sleep } from '@/utils'

export const getStockBySlug = async ( slug : string ) => {

  try {
    await sleep( 3 )
    const productStock = await prisma.products.findUnique({
      where: { slug },
      select: {
        inStock: true
      }
    })

    return productStock?.inStock ?? 0
  } catch ( error ) {
    console.error( error )
    return 0
  }
}
