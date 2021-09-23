import Head from 'next/head'
import React from 'react'
import HeadingHome from '../components/HeadingHome'
import Navbar from '../components/Navbar'
import RealStateItem from '../components/RealStateItem'
import RealStateLayout from '../components/RealStateLayout'
import { filterIncludeRealEstates } from '../core'

export const getStaticProps = async () => {
  const response = await fetch('https://lh-real-estates-challenge-api.herokuapp.com/real-estates')
  const { data, included } = await response.json()
  return {
    props: {
      data,
      included
    }
  }
}

export default function Home({ data, included }) {
  const realEstateItemList = filterIncludeRealEstates(data, included)
  const realEstatesListComponents = realEstateItemList.map(item => 
    <RealStateItem 
      key={item.id} 
      attributes={item.attributes} 
      images={item.imagesMap}
    />)
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
          {realEstatesListComponents}
        </RealStateLayout>
      </main>
    </React.Fragment>
  )
}
