'use server'

import { prisma } from '@/lib'

export const getProductBySlug = async ( slug : string ) => {

  try {

    const product = await prisma.products.findUnique({
      where: { slug },
      include: {
        images: {
          select: {
            url: true
          }
        }
      }
    })

    if ( !product ) return null

    return {
      ...product,
      images: product.images.map( image => image.url ),
    }

  } catch ( error ) {
    console.error( error )
    throw new Error( `Error getting product by slug` )
  }

}
