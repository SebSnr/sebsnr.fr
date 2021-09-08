import React from 'react'
import Footer from '../components/Footer'
import HomeBanner from '../components/HomeBanner'
import HomeContent from '../components/HomeContent'
import Navigation from '../components/Navigation'
import SkillsCarousel from '../components/SkillsCarousel'
// components

export default function HomePage() {
    return (
        <React.Fragment>
            <Navigation />
            <HomeBanner />
            <SkillsCarousel />
            <HomeContent />
            <Footer />        
        </React.Fragment>
    )
}
