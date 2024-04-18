import Link from "next/link"
import { IoBugOutline } from "react-icons/io5"

interface IProps {
  title: string
  icon?: React.ReactNode
  href?: string
}

export const SidebarItem = ( { title, icon, href }: IProps ) => {
  
  return (
    <Link
      href={ href ?? '' }
      className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all gap-4"
    >
      {
        ( icon )
          ? icon
          : <IoBugOutline size={ 30 } />
      }
      <span className="text-xl"> { title } </span>
    </Link> 
  )
}
