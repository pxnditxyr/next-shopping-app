
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <div className="w-full sm:w-[350px] px-10">
        { children }
      </div>
    </main>
  )
}
