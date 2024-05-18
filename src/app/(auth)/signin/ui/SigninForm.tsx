'use client'

import { useFormState, useFormStatus } from 'react-dom'
import Link from 'next/link'

import { authenticate } from '@/actions'
import { IoInformationOutline } from 'react-icons/io5'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export const SigninForm = () => {

  const searchParams = useSearchParams()
  const redirect = searchParams.get( 'redirect' )
  console.log( 'redirect', redirect )

  const [ state, dispatch ] = useFormState( authenticate, undefined )

  useEffect( () => {
    if ( state === 'Success' ) {
      window.location.replace( redirect ?? '/' )
    }
  }, [ state ] )


  return (
    <form
      className="flex flex-col"
      action={ dispatch }
    >

      <label htmlFor="email"> Email </label>
      <input
        id="email"
        name="email"
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
      />

      <label htmlFor="password"> Password </label>
      <input
        id="password"
        name="password"
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
      />

      <div
        className="flex h-9 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {
          ( state === 'Invalid credentials' ) && (
            <div className="py-4 flex items-center gap-2">
              <IoInformationOutline className="text-red-500 w-5 h-5" />
              <p className="text-red-500">Invalid credentials</p>
            </div>
          )
        }
      </div>

      <SigninButton />

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
    </form> 
  )
}

export const SigninButton = () => {
  const { pending } = useFormStatus()
  return (
    <button
      className={ clsx({
        'btn-primary': !pending,
        'btn-disabled': pending,
      }) }
      disabled={ pending }
    > Sign in </button>
  )
}
