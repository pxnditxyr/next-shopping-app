import { create } from 'zustand'

interface IUiState {
  isSideMenuOpen: boolean
  openSideMenu: () => void
  closeSideMenu: () => void
}

export const useUiStore = create<IUiState>( ( set ) => ({
  isSideMenuOpen: false,
  openSideMenu: () => set( { isSideMenuOpen: true } ),
  closeSideMenu: () => set( { isSideMenuOpen: false } )
}) )
