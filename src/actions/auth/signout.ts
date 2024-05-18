'use server'

import { signOut } from '@/auth.config'

export const signout = async () => {
  await signOut()
}

