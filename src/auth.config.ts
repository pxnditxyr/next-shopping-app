import NextAuth, { type NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { prisma } from './lib'
import { compareSync } from 'bcryptjs'

export const authConfig : NextAuthConfig = {
  pages: {
    signIn: '/signin',
    newUser: '/signup',
  },
  callbacks: {
    jwt ({ token, user }) {
      if ( user ) {
        token.data = user
      }

      return token
    },
    session ({ session, token, user }) {

      session.user = token.data as any

      return session
    },
    authorized( { auth, request: { nextUrl } } ) {

      console.log({ auth })

      // const isLoggedIn = !!auth?.user;
      //
      // const isOnDashboard = nextUrl.pathname.startsWith( '/' );
      //
      // if ( isOnDashboard ) {
      //   if ( isLoggedIn ) return true;
      //   return false;
      // } else if ( isLoggedIn ) {
      //   return Response.redirect( new URL( '/', nextUrl ) );
      // }
      return true;
    },
  },
  providers: [
    Credentials({
      async authorize ( credentials ) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min( 6 ),
          })
          .safeParse( credentials )

        if ( !parsedCredentials.success ) return null

        const { email, password } = parsedCredentials.data

        const user = await prisma.users.findUnique({
          where: { email: email.toLowerCase() },
        })

        if ( !user ) return null

        if ( !compareSync( password, user.password ) ) return null

        const { password: _, ...userWithoutPassword } = user

        return userWithoutPassword
      }
    })
  ]
}

export const { signIn, signOut, auth, handlers } = NextAuth( authConfig )
