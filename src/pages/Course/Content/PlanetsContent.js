import React from 'react'

import PlanetRow from './PlanetRow'

const PlanetsContent = () => {
  const planetContent = {
    
  }

  return (
    <>
      <PlanetRow planetPosition='left' image='Sun' content="Lorem ipsum" />
      <PlanetRow planetPosition='right' image='Mercury' content="Lorem ipsum" />
      <PlanetRow planetPosition='left' image='Venus' content="Lorem ipsum" />
      <PlanetRow planetPosition='right' image='Earth' content="Lorem ipsum" />
      <PlanetRow planetPosition='left' image='Mars' content="Lorem ipsum" />
      <PlanetRow planetPosition='right' image='Jupiter' content="Lorem ipsum" />
      <PlanetRow planetPosition='left' image='Saturn' content="Lorem ipsum" />
      <PlanetRow planetPosition='right' image='Uranus' content="Lorem ipsum" />
      <PlanetRow planetPosition='left' image='Neptune' content="Lorem ipsum" />
      <PlanetRow planetPosition='right' image='Neptune' content="Lorem ipsum" />
    </>
  )
}

export default PlanetsContent