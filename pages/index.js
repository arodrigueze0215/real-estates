import Head from 'next/head'
import React from 'react'
import HeadingHome from '../components/HeadingHome'
import Navbar from '../components/Navbar'
import RealStateItem from '../components/RealStateItem'
import RealStateLayout from '../components/RealStateLayout'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="http://fonts.cdnfonts.com/css/silka" rel="stylesheet"/>
      </Head>
      <Navbar/>

      <main>
        <HeadingHome/>
        <RealStateLayout>
          <RealStateItem/>
          <RealStateItem/>
          <RealStateItem/>
          <RealStateItem/>
          <RealStateItem/>
          <RealStateItem/>
          <RealStateItem/>
        </RealStateLayout>
      </main>
    </React.Fragment>
  )
}
