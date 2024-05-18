import { prisma } from '../lib'
import { initialData } from './seed'

async function main () {
  console.log( 'Seeding database 🐼...' )

  try {
    await prisma.users.deleteMany()
    await prisma.productImages.deleteMany()
    await prisma.products.deleteMany()
    await prisma.categories.deleteMany()
  } catch ( error ) {
    console.error( 'Error clearing database:', error )
    process.exit( 1 )
  }

  console.log( 'Database cleared.' )

  const { categories, products, users } = initialData

  await prisma.users.createMany({
    data: users,
  })

  const categoriesData = categories.map( name => ({ name }) )

  await prisma.categories.createMany({
    data: categoriesData,
  })

  console.log( 'Categories created.' )

  const categoriesDB = await prisma.categories.findMany()

  const categoriesMap = categoriesDB.reduce( ( map, category ) => {
    map[ category.name.toLowerCase() ] = category.id
    return map
  }, {} as Record<string, string> )


  products.forEach( async ( product ) => {
    const { images, type, ...productData } = product
    const dbProduct = await prisma.products.create({
      data: {
        ...productData,
        categoryId: categoriesMap[ type ],
      }
    } )
    const imagesData = images.map( image => ({
      url: image,
      productId: dbProduct.id,
    }) )

    await prisma.productImages.createMany({
      data: imagesData,
    })
  } )
   
  console.log( 'Database seeded.' )
}

( async () => {
  if ( process.env.NODE_ENV === 'production' ) return
  main()
} )()

