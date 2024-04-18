'use client'

import { useUiStore } from '@/store'

export const OpenMenuButton = () => {
  const openMenu = useUiStore( state => state.openSideMenu )
  return (
    <button
      className="p-2 rounded-md transition-all hover:bg-gray-100 hover:text-gray-900"
      onClick={ () => openMenu() }
    >
      Menu
    </button>
  )
}
