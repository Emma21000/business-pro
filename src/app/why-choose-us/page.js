import React from 'react'
import { choosehero } from '../../../data/choose-us/chooseUs-hero'
import ChooseUs from './ChooseUs'
import { chooseUs } from '../../../data/choose-us/chooseUs'
import Hero from '../components/Hero'
import Card from './Card'
import { cardData } from '../../../data/choose-us/card'

export default function page() {
  return (
    <div>
        <Hero data={choosehero} />
        <ChooseUs data={chooseUs} />
        <Card data={cardData} />
    </div>
  )
}
