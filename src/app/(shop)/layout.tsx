
export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      { children }
    </main>
  )
}
