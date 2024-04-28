'use server'

import { TValidType } from '@/interfaces'
import { prisma } from '@/lib'
import { Gender } from '@prisma/client'

interface IPaginationOptions {
  page?: number
  take?: number
  gender?: Gender
}

export const getPaginatedProductsWithImages = async ( { page = 1, take = 10, gender } : IPaginationOptions = {} ) => {

  if ( isNaN( Number( page ) ) ) page = 1
  if ( page < 1 ) page = 1

  if ( isNaN( Number( take ) ) ) take = 10
  if ( take < 1 ) take = 10

  try {
    const products = await prisma.products.findMany({
      take,
      skip: ( page - 1 ) * take,
      include: {
        images: {
          take: 2,
          select: {
            url: true
          }
        },
        category: true,
      },
      where: {
        gender
      }
    })

    const totalProducts = await prisma.products.count({
      where: {
        gender
      }
    })
    const totalPages = Math.ceil( totalProducts / take )

    return {
      currentPage: page,
      totalPages: totalPages,
      products: products.map( product => ({
        ...product,
        images: product.images.map( image => image.url ),
        type: product.category.name as TValidType
      }) )
    }
  } catch ( error ) {
    throw new Error( 'Error getting products' )
  }
}
