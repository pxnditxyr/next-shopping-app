import { titleFont } from "@/config"

interface IProps {
  title: string
  subtitle?: string
  className?: string
}


export const Title = ( { title, subtitle, className } : IProps ) => {
  return (
    <div className={ `w-full flex flex-col gap-4 p-5 items-center ${ className }`}>
      <h1 className={ `${ titleFont.className } antialiased text-4xl font-semibold` }>
        { title }
      </h1>
      {
        ( subtitle ) && (
          <h3 className="text-xl p-5">
            { subtitle }
          </h3>
        )
      }
    </div>
  )
}
