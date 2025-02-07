import React from 'react'
import Banner from './Banner'
import Map from '../Map/Map'
import NewsLetter from './NewsLetter'
import FeaturedRoom from './FeaturedRoom'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Map></Map>
            <NewsLetter></NewsLetter>
            <FeaturedRoom></FeaturedRoom>
        </div>

    )
}

export default Home