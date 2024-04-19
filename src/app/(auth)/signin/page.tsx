import { titleFont } from '@/config'
import Link from 'next/link'

export default function SigninPage () {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Ingresar</h1>
      <div className="flex flex-col">
        <label htmlFor="email"> Email </label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email"
        />

        <label htmlFor="email"> Password </label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="password"
        />
        <button className="btn-primary"> Sign in </button>

        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link
          href="/signup"
          className="btn-secondary text-center"
        >
          Create a new account
        </Link>
      </div>
    </div>
  )
}
