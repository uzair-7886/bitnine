import React from 'react'
import Navbar from '../components/Navbar'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import EnterprisePackage from '../components/EnterprisePackage'
import KeyFeatures from '../components/KeyFeatures'

function HomePage() {
  return (
    <>
    <Navbar/>
    <MainSection/>
    <KeyFeatures/>
    <EnterprisePackage/>
    <Footer/>
    </>
  )
}

export default HomePage