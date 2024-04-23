import React from 'react'
import Question from './Question'

const Questions = ({ evaluateTest }) => {
    const qns = [
        {
            key: 1,
            qn: 'What is the primary reason for Mercury\'s extreme temperature fluctuations?',
            options: ['Intense volcanic activity', 'Lack of atmosphere', 'Abundance of greenhouse gases', 'Proximity to the asteroid belt'],
        },
        {
            key: 2,
            qn: 'What causes Venus to have a runaway greenhouse effect, resulting in its extremely high surface temperatures?',
            options: ['Thick cloud cover', 'Excessive volcanic activity', 'Presence of methane in the atmosphere', 'Retrograde rotation'],
        },
        {
            key: 3,
            qn: 'What geological process is responsible for shaping Earth\'s diverse landscapes and creating continents?',
            options: ['Tectonic plate movement', 'Volcanic eruptions', 'Glacial erosion', 'Meteorite impacts'],
        },
        {
            key: 4,
            qn: 'Which distinctive feature gives Mars its characteristic reddish color?',
            options: ['Iron oxide', 'Methane clouds', 'Water ice', 'Sulfuric acid clouds'],
        },
        {
            key: 5,
            qn: 'What is the most prominent feature on Jupiter, often referred to as a giant storm system?',
            options: ['Great Red Spot', 'Polar ice caps', 'Hexagonal storm', 'Ring system'],
        },
        {
            key: 6,
            qn: 'What gives Saturn its spectacular ring system?',
            options: ['Layers of frozen methane', 'Debris from asteroid collisions', 'Ice particles and dust', 'Magnetic field disturbances'],
        },
        {
            key: 7,
            qn: 'What makes Uranus unique in terms of its rotational axis compared to other planets?',
            options: ['Rapid rotation', 'Axial tilt', 'Retrograde motion', 'Lack of magnetic field'],
        },
        {
            key: 8,
            qn: 'Which moon of Neptune exhibits peculiar retrograde motion and is the largest in its system?',
            options: ['Titan', 'Ganymede', 'Triton', 'Europa'],
        },
        {
            key: 9,
            qn: 'What is the primary process occurring in the Sun\'s core that releases vast amounts of energy?',
            options: ['Nuclear fusion', 'Solar flares', 'Nuclear fission', 'Magnetic storms'],
        },
        {
            key: 10,
            qn: 'Which type of eclipse occurs when Earth comes between the Sun and the Moon?',
            options: ['Solar eclipse', 'Lunar eclipse', 'Annular eclipse', 'Partial eclipse'],
        },
    ];

  return (
     <div id="Quiz">
        <form onSubmit={evaluateTest}>
            {qns.map((q) => (
                    <Question key={q.key} num={q.key} qn={q.qn} options={q.options} />
            ))}
            <button type="submit" value="Submit" id='testSubmitBtn'>Submit</button>
            <br />
            <button type="reset" value="Reset">Clear</button>
            <br />
        </form>
     </div>
  )
}

export default Questions
