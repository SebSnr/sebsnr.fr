import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Navigation from '../components/Navigation'
import SkillsCarousel from '../components/SkillsCarousel'
// components

export default function HomePage() {
    return (
        <React.Fragment>
            <Navigation />
            <HomeBanner />
            <SkillsCarousel />        
        </React.Fragment>
    )
}
