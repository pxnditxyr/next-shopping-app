import { titleFont } from "@/config"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex justify-center w-full bg-gray-200 gap-2 py-8">
      <Link href="/">
        <span className={ `${ titleFont.className } antialiased font-bold` }>
          Shopping Pxndxs
        </span>
        <span> | shop </span>
        <span> © { new Date().getFullYear() } </span>
      </Link>
      <Link href="/privacy" className="text-blue-500"> Privacy Policy </Link>
    </div>
  )
}
