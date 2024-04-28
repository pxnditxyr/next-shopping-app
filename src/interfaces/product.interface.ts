export interface IProduct {
  id: string
  description: string
  images: string[]
  inStock: number
  price: number
  sizes: TValidSizes[]
  slug: string
  tags: string[]
  title: string
  // type: TValidType
  gender: TValidCategory
}

export interface ICartItem {
  id: string
  slug: string
  title: string
  price: number
  quantity: number
  size: TValidSizes
  image: string
}

export type TValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL'
export type TValidType = 'shirts'|'pants'|'hoodies'|'hats'
export type TValidCategory = 'men' | 'women' | 'kid' | 'unisex'
