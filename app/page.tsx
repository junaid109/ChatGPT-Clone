import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SunIcon  from '@heroicons/react/24/outline'

const Home: NextPage = () => {
  return (
    <div>

      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Chat GPT | NEXT JS</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a className="text-blue-600" href="https://junaidmalik.org">
              CHAT GPT | NEXT JS
            </a>
          </h1>

          <p className="mt-3 text-2xl">
            Get started by entering your query{' '}
            <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
              into the chatbox
            </code>
          </p>

          <div className="flex flex-col items-center justify-center mb-5">
            <a
              href="https://junaidmalik.org/"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <SunIcon className="h-6 w-6 text-green-500"></SunIcon>
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and its API.
              </p>
            </a>

            <a
              href="https://junaidmalik.org "
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Capabilities &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>


          </div>
        </main>

        <footer className="flex h-24 w-full items-center justify-center border-t">
          <a
            className="flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '} Junaid Malik
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </footer>
      </div>
    </div>
  )
}

export default Home
