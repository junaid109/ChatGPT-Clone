import '../styles/globals.css'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import SideBar from '../components/Layout/SideBar'
import Login from '../components/Login'
import { getServerSession } from 'next-auth'
import { authOptions } from './../pages/api/auth/[...nextauth]';
import SessionProvider from '../components/SessionProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)
  return (
    <html>
      <head />   
      <SessionProvider session={session}>
        {!session ? (
          <Login />
        ) : (
          
      <body>
        <div className="flex">
          <div className='bg-[#2021123] max-w-xs h-screen overflow-y-auto  md:min-w-[20rem]'>
            <SideBar />
          </div>


      <div className="bg-[#b0c6f5] flex-1">{children}</div>
      </div>

      </body>
      </SessionProvider>
    </html>
  )
}
