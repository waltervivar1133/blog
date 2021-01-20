import Head from 'next/head'
import React , {useState} from 'react'
import Navigator from '../layouts/Navigator'
import SocialSideBar from '../layouts/SocilaSideBar/SocialSideBar'

interface Props {
  
}

const DefaultLayout: React.FC = (props) => {
  return (
    <div>
      <div className="min-h-screen  bg-black-bg pb-12">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigator/>
      <main className="flex py-8 px-4 lg:px-0">
        <SocialSideBar/>
        {props.children}

      </main>

      </div>
    </div>
  )
}

export default DefaultLayout
