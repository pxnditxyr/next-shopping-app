'use client'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5'
import { SidebarItem } from './SidebarItem'
import { useUiStore } from '@/store'
import clsx from 'clsx'
import { signout } from '@/actions'
import { useSession } from 'next-auth/react'

const sidebarItems = [
  {
    title: 'Profile',
    icon: <IoPersonOutline size={ 30 } />,
    href: '/profile'
  },
  {
    title: 'Orders',
    icon: <IoTicketOutline size={ 30 } />,
    href: '/orders'
  },
]

const sidebarItemsManagement = [
  {
    title: 'Products',
    icon: <IoShirtOutline size={ 30 } />,
    href: '/products'
  },
  {
    title: 'Orders',
    icon: <IoTicketOutline size={ 30 } />,
    href: '/orders'
  },
  {
    title: 'Users',
    icon: <IoPeopleOutline size={ 30 } />,
    href: '/users'
  }
]

export const Sidebar = () => {
  const isSideMenuOpen = useUiStore( state => state.isSideMenuOpen )
  const closeMenu = useUiStore( state => state.closeSideMenu )

  const { data: session } = useSession()

  const isAuthenticated = !!session?.user
  const isAdmin = session?.user?.role === 'admin'
  console.log({ session })

  return (
    <div className="">
      {
        ( isSideMenuOpen ) && (
          <>
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
            <div
              className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
              onClick={ () => closeMenu() }
            ></div>
          </>
        )
      }
      
      <aside
        className={
          clsx(
            "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
            {
              "translate-x-full": !isSideMenuOpen,
            }
          )
        }
      >
        {/* TODO: slide effect */}
        <IoCloseOutline
          size={ 50 }
          className="absolute top-5 right-5 cursor-pointer"
          onClick={ () => closeMenu() }
        />
        <div className="relative mt-14">
          <IoSearchOutline size={ 20 } className="absolute top-3 left-3" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 rounded px-10 py-2 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>
        {
          ( isAuthenticated ) && (
            sidebarItems.map( ( item, index ) => (
              <SidebarItem
                key={ index }
                { ...item }
                onClick={ closeMenu }
              />
            ) )
          )
        }

        {
          ( isAuthenticated )
            ? (
              <button
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all gap-4 text-xl"
                onClick={ () => signout() }
              >
                <IoLogOutOutline size={ 30 } />
                Sign Out
              </button>
            )
            :  (
              <SidebarItem
                title="Sign In"
                icon={ <IoLogInOutline size={ 30 } /> }
                href="/signin"
                onClick={ closeMenu }
              />
            )
        }
        <div className="w-full h-px bg-gray-300 my-10 rounded-md"></div>
        {
          ( isAdmin ) && (
            sidebarItemsManagement.map( ( item, index ) => (
              <SidebarItem
                key={ index }
                { ...item }
                onClick={ closeMenu }
              />
            ) )
          )
        }
      </aside>
    </div>
  )
}
