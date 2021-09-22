import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="http://fonts.cdnfonts.com/css/silka" rel="stylesheet"/>
      </Head>
      <Navbar/>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          The will be here!!
        </h1>
      </main>
    </div>
  )
}
