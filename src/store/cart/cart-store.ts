import { ICartItem } from '@/interfaces'
import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'


interface IState {
  cart: ICartItem[]
  addProductToCart: ( product : ICartItem ) => void
  updateProductQuantity: ( product : ICartItem, quantity : number ) => void
  removeProductFromCart: ( product : ICartItem ) => void

  getTotalItems: () => number
  getSummaryInformation: () => {
    subTotal: number
    tax: number
    total: number
    itemsInCart: number
  }
}

const cartStore : StateCreator<IState> = ( set, get ) => ({
  cart: [],
  addProductToCart: ( product : ICartItem ) => {
    const { cart } = get()
    const productInCart = cart.some(
      ( item ) => item.id === product.id && item.size === product.size
    )

    if ( !productInCart ) {
      set({ cart: [ ...cart, product ] })
      return;
    }

    const updatedCartProducts = cart.map( ( item ) => {
      if ( item.id === product.id && item.size === product.size ) {
        return {
          ...item,
          quantity: item.quantity + product.quantity
        }
      }
      return item
    } )

    set({ cart: updatedCartProducts })
  },
  updateProductQuantity: ( product : ICartItem, quantity : number ) => {
    const { cart } = get()
    const updatedCartProducts = cart.map( ( item ) => {
      if ( item.id === product.id && item.size === product.size ) {
        console.log( { item, quantity } )
        return {
          ...item,
          quantity
        }
      }
      return item
    } )
    set({ cart: updatedCartProducts })
  },
  removeProductFromCart: ( product : ICartItem ) => {
    const { cart } = get()
    const updatedCartProducts = cart.filter(
      ( item ) => !( item.id === product.id && item.size === product.size )
    )
    set({ cart: updatedCartProducts })
  },
  getTotalItems: () => {
    const { cart } = get()
    return cart.reduce( ( total, item ) => total + item.quantity, 0 )
  },
  getSummaryInformation: () => {
    const { cart } = get()
    const subTotal = cart.reduce(
      ( subTotal, product ) => ( product.quantity * product.price ) + subTotal,
      0
    )

    const tax = subTotal * 0.15
    const total = subTotal + tax
    const itemsInCart = cart.reduce( ( total, item ) => total + item.quantity, 0 )

    return {
      subTotal,
      tax,
      total,
      itemsInCart
    }
  }
})

export const useCartStore = create<IState>()(
  persist(
    cartStore,
    {
      name: 'shopping-cart',
    }
  )
)
