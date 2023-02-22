'use client'

import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

type Props =
{
    children: React.ReactNode;
    session: Session;
}

export default function SessionProvider({ session, children }: Props) {
  console.log('SessionProvider: ', session);
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}