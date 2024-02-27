import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

export default function Shop() {
  return (
    <div>
       <Hero heroColl="latest collection" heroTitle="NEW ARRIVALS ONLY" heroNewColl="New"/>
       <Popular/>
       <Offer/>
       <NewCollections/>
       <NewsLetter/>
    </div>
  )
}
