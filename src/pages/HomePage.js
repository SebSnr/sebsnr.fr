import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Navigation from '../components/Navigation'
// components

export default function HomePage() {
    return (
        <React.Fragment>
            <Navigation />
            <HomeBanner />        
        </React.Fragment>
    )
}
