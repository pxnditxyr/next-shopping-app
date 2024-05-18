import { auth } from "@/auth.config"
import { redirect } from "next/navigation"

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const session = await auth()

  if ( session?.user ) {
    console.log( 'User is logged in entra' )
    redirect( '/' )
  }

  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full sm:w-[350px] px-10">
        { children }
      </div>
    </main>
  )
}
