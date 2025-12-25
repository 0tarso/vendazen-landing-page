import AboutUs from '@/components/AboutUs'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Lightbulb, Target, Users } from 'lucide-react'
import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen'>
      <Navbar />

      <AboutUs />

      <CTA />

      <Footer />

    </div>
  )
}
