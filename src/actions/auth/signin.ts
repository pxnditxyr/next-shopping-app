'use server'

import { signIn } from '@/auth.config'

export async function authenticate ( prevState : string | undefined, formData: FormData) {
  try {

    console.log({ formData: Object.fromEntries( formData ) })
    await signIn(
      'credentials',
      {
        ...Object.fromEntries( formData ),
        redirect: false,
      }
    )
    return 'Success'

  } catch ( error ) {
    // if ( ( error as any ).type === 'CredentialsSignin' )
    if ( ( error as Error ).message.includes( 'CredentialsSignin' ) ) {
      return 'Invalid credentials'
    }
    // throw error

    return 'Unknown error'
  }
}

export const  signin = async ( email : string, password : string ) => {
  try {
    await signIn( 'credentials', {
      email,
      password,
      redirect: false
    } )
    return {
      ok: true
    }
  } catch ( error ) {
    console.log( error )
    return {
      ok: false,
      message: 'Invalid credentials'
    }
  }
}
