import React from 'react'

import PlanetRow from './PlanetRow'

const PlanetsContent = () => {
  const planetContent = [
      {
        id: 'Sun',
        image: 'Sun',
        content: 'At the heart of our solar system, the Sun is a massive ball of hot, glowing plasma, primarily composed of hydrogen and helium. Its energy, generated through nuclear fusion, sustains life on Earth and drives the dynamics of the solar system. The Sun\'s magnetic activity influences space weather, impacting planets and other celestial bodies within its gravitational embrace.'
      },
      {
        id: 'Mercury',
        image: 'Mercury',
        content: 'Mercury, the innermost planet, orbits the Sun at an average distance of 36 million miles. It boasts extreme temperature fluctuations, ranging from scorching daytime highs of 800 degrees Fahrenheit to freezing nights as cold as -290 degrees Fahrenheit. Lacking a substantial atmosphere, Mercury\'s surface is marked by craters and rugged terrains, making it a rocky and desolate world. Its swift 88-day orbit around the Sun is the shortest among all planets.'
      },
      {
        id: 'Venus',
        image: 'Venus',
        content: 'Cloaked in thick clouds of sulfuric acid, Venus is the second planet from the Sun. It experiences a runaway greenhouse effect, trapping heat and resulting in surface temperatures that can reach a blistering 900 degrees Fahrenheit. Often referred to as Earth\'s "sister planet," Venus shares a similar size and composition, yet its atmosphere creates a stark contrast, obscuring the view of its rocky surface. Venus rotates on its axis in the opposite direction to most planets, causing a slow and retrograde rotation.'
      },
      {
        id: 'Earth',
        image: 'Earth',
        content: 'The third planet from the Sun and our home, Earth is characterized by a unique blend of life-sustaining features. With a diverse climate, liquid water, and a protective atmosphere, Earth fosters a rich tapestry of ecosystems. Its rotation on a tilted axis gives rise to seasons, while the gravitational pull of the Sun and Moon orchestrates tides. Earth\'s dynamic geology and atmosphere work in harmony to create a planet teeming with life.'
      },
      {
        id: 'Mars',
        image: 'Mars',
        content: 'Mars, often called the "Red Planet" due to its iron-rich soil, is the fourth planet from the Sun. With a thin atmosphere primarily composed of carbon dioxide, Mars has polar ice caps, valleys, and towering volcanoes. The search for signs of past or present life on Mars has been a focus of exploration missions. Its distinct reddish hue is attributed to iron oxide, giving the Martian landscape a captivating and otherworldly appearance.'
      },
      {
        id: 'Jupiter',
        image: 'Jupiter',
        content: 'As the largest planet in our solar system, Jupiter is a gas giant with a powerful magnetic field. Its swirling bands of clouds, including the iconic Great Red Spot, create a mesmerizing visual spectacle. Jupiter has an extensive system of rings and a diverse array of moons, with Ganymede being the largest natural satellite in the solar system.'
      },
      {
        id: 'Saturn',
        image: 'Saturn',
        content: 'Saturn, known for its stunning ring system, is a gas giant similar to Jupiter. The rings, composed of ice particles and debris, orbit the planet in a mesmerizing display. Saturn\'s hexagonal-shaped storm at its north pole and its numerous moons, including Titan with its thick atmosphere, add to the planet\'s allure.'
      },
      {
        id: 'Uranus',
        image: 'Uranus',
        content: 'Uranus, an ice giant, rotates on its side, making it a unique member of the solar system. It possesses a faint ring system and a set of moons, including Titania and Oberon. Uranus\'s blue-green color is attributed to methane in its atmosphere, and its axial tilt contributes to extreme seasonal variations.'
      },
      {
        id: 'Neptune',
        image: 'Neptune',
        content: 'Neptune, the outermost gas giant, is characterized by its deep blue hue and strong winds. It has a turbulent atmosphere with dark storm systems, including the famous Great Dark Spot. Neptune\'s system includes rings and a collection of moons, with Triton standing out as the largest and exhibiting peculiar retrograde motion.'
      },
      {
        id: 'Eclipse',
        image: '',
        content: 'An eclipse occurs when one celestial body passes through the shadow of another, resulting in a temporary reduction or complete blocking of light. On Earth, there are two primary types of eclipses: solar and lunar. A solar eclipse transpires when the Moon passes between the Sun and Earth, casting a shadow on the Earth\'s surface and obscuring all or part of the Sun. Conversely, a lunar eclipse unfolds when Earth comes between the Sun and the Moon, causing Earth\'s shadow to fall on the Moon\'s surface. Solar eclipses are further categorized into total, partial, and annular, depending on the alignment of the three celestial bodies. These captivating celestial events have intrigued and fascinated humanity throughout history, often inspiring mythologies, cultural beliefs, and scientific inquiry. The rarity and visual spectacle of eclipses continue to captivate sky gazers worldwide, bringing people together to witness the awe-inspiring dance of the celestial bodies.'
      }
  ]
  
  return (
    <>
      {planetContent.map(planet => (
        <PlanetRow
          key={planet.id}
          planetPosition={planet.id === ('Sun' || 'Venus' || 'Mars' || 'Saturn' || 'Neptune') ? 'left' : 'right'}
          image={planet.image}
          content={planet.content}
        />
      ))}
    </>
  )
}

export default PlanetsContent