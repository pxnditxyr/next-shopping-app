import { Footer, Sidebar, TopMenu } from '@/components'

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="">
        { children }
      </div>
      <Footer />
    </main>
  )
}
