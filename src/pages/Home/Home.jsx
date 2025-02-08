import React from 'react'
import Layout from '../../components/layout/Layout'
import LandingSection from './LandingSection'
import HomeAbout from './HomeAbout'
import HomeMenu from './HomeMenu'
import Promotion from './Promotion'
import HomeShop from './HomeShop'
import Testimonials from './Testimonials'
import Contact from './Contact'

function Home() {

  return (
    <>
    <Layout>
     <LandingSection/>
     <HomeAbout/>
     <HomeMenu/>
     <Promotion/>
     <HomeShop/>
     <Testimonials/>
     <Contact/>
    </Layout>
    </>
  )
}

export default Home
