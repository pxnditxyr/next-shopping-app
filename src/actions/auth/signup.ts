'use server'

import { prisma } from "@/lib"
import { hashSync } from "bcryptjs"

export const signup = async ( name : string, email : string, password : string) => {
  try {

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: hashSync( password )
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    })

    return {
      ok: true,
      user
    }

  } catch ( error ) {
    console.log( error )
    return {
      ok: false,
      message: 'It could not be created'
    }
  }

}
