import React from 'react'
import Layout from '../components/layout/Layout'
import AboutLandingSection from '../pages/About/AboutLanding'
import AboutAboutSection from '../pages/About/AboutAboutSection'
function About() {
  return (
    <Layout>
        <AboutLandingSection/>
        <AboutAboutSection/>
    </Layout>
  )
}

export default About
