import { ICartItem } from '@/interfaces'
import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'


interface IState {
  cart: ICartItem[]
  addProductToCart: ( product : ICartItem ) => void
  // update

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
