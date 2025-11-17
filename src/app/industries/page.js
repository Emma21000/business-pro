import React from 'react'
import Hero from '../components/Hero'
import { industryHero } from '../../../data/industrise/industryHero'
import ChooseUs from '../why-choose-us/ChooseUs'
import { aboutSec } from '../../../data/industrise/aboutSec'
import { aboutCard } from '../../../data/industrise/aboutCard'
import Card from '../why-choose-us/Card'

export default function page() {
  return (
    <div>
        <Hero data={industryHero} />
        <ChooseUs data={aboutSec} />
        <Card data={aboutCard} />
    </div>
  )
}
