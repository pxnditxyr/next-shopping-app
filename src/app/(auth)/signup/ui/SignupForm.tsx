'use client'

import { signin } from "@/actions"
import { signup } from "@/actions/auth/signup"
import clsx from "clsx"
import { useState } from "react"
import { useForm } from "react-hook-form"


interface IFormInputs {
  name: string
  email: string
  password: string
}

export const SignupForm = () => {

  const [ errorMessage, setErrorMessage ] = useState<string>( '' )
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>()

  const onSubmit = async ( data : IFormInputs ) => {
    setErrorMessage( '' )

    const { name, email, password } = data

    const response = await signup( name, email, password )

    if ( !response.ok ) {
      setErrorMessage( response.message! )
      return
    }
  
    await signin( email.toLowerCase(), password )

    window.location.replace( '/' )
  }

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={ handleSubmit( onSubmit ) }
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="name"> Full Name </label>
        <input
          id="name"
          className={
            clsx(
              "px-5 py-2 border bg-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
              {
                'border-red-500 border-2 focus:ring-0': !!errors?.name
              }
            )
          }
          type="text"
          autoFocus
          { ...register( 'name', { required: true } ) }
        />
        {
          ( errors?.name?.type === 'required' ) && (
            <span className="text-red-500"> This field is required </span>
          )
        }
      </div>
      <label htmlFor="email"> Email </label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
            {
              'border-red-500 border-2 focus:ring-0': !!errors?.email
            }
          )
        }
        type="text"
        { ...register( 'email', { required: true, pattern: /^\S+@\S+$/i } ) }
      />

      {
        ( errors?.email?.type === 'required' ) && (
          <span className="text-red-500"> This field is required </span>
        )
      }

      {
        ( errors?.email?.type === 'pattern' ) && (
          <span className="text-red-500"> Invalid email </span>
        )
      }

      <label htmlFor="password"> Password </label>
      <input
        id="password"
        className={
          clsx(
            "px-5 py-2 border bg-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
            {
              'border-red-500 border-2 focus:ring-0': !!errors?.password
            }
          )
        }
        type="password"
        { ...register( 'password', { required: true } ) }
      />

      {
        ( errors?.password?.type === 'required' ) && (
          <span className="text-red-500"> This field is required </span>
        )
      }

      {
        errorMessage && (
          <span className="text-red-500"> { errorMessage } </span>
        )
      }

      <button
        className="btn-primary"
      >
        Sign up
      </button>
    </form>
  )
}
