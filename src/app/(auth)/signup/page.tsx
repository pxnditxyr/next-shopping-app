import { titleFont } from '@/config'
import Link from 'next/link'
import { SignupForm } from './ui/SignupForm'

export default function SignupPage () {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Ingresar</h1>
      <div className="flex flex-col">

        <SignupForm />
        
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link
          href="/signin"
          className="btn-secondary text-center">
          Already have an account?
        </Link>
      </div>
    </div>
  )
}
