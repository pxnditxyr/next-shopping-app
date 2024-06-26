import { titleFont } from '@/config'
import { SigninForm } from './ui/SigninForm'

export default function SigninPage () {

  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Ingresar</h1>
      <SigninForm />
    </div>
  )
}
