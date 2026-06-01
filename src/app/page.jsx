import Image from 'next/image'
import React from 'react'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import SocialProof from './components/SocialProof'

const Page = () => {
  return (
    <>
      <Hero></Hero>
      <ProductShowcase></ProductShowcase>
      <SocialProof></SocialProof>
    </>
  )
}

export default Page