import { titleFont } from "@/config"
import { notFound } from "next/navigation"

export const metadata = {
  title: 'Cartegory Page',
  description: 'Cartegory Page',
}

interface IProps {
  params: {
    id: string
  }
}

export default function CartegoryPage ( { params }: IProps ) {

  const { id } = params

  if ( id === 'kids' ) {
    notFound()
  }

  return (
    <div className="">
      <h1
        className={ `${ titleFont.className } antialiased font-bold text-4xl` }
      > Cartegory Page </h1>
      <p className="text-xl"> Category ID: { id } </p>
    </div>
  )
}
