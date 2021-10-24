import React from 'react'
// components
import Footer from '../components/Footer'
import HomeBanner from '../components/HomeBanner'
import HomeContent from '../components/HomeContent'
import Navigation from '../components/Navigation'
import References from '../components/References'
import SkillsCarousel from '../components/SkillsCarousel'

export default function HomePage() {
    return (
        <React.Fragment>
            <Navigation />
            <HomeBanner />
            <SkillsCarousel />
            <HomeContent />
            <References />
            <Footer />        
        </React.Fragment>
    )
}
