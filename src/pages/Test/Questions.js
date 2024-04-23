import React from 'react'

import Question from './Question'

const Questions = () => {
   const qns = [
        {
            qn: 'Something',
            options: ['a', 'b', 'c', 'd'],
        },
        {
            qn: 'Something2',
            options: ['a', 'b', 'c', 'd'],
        },
        {
            qn: 'Something3',
            options: ['a', 'b', 'c', 'd'],
        },
        {
            qn: 'Something3',
            options: ['a', 'b', 'c', 'd'],
        },
        {
            qn: 'Something3',
            options: ['a', 'b', 'c', 'd'],
        },
        {
            qn: 'Something3',
            options: ['a', 'b', 'c', 'd'],
        },
        {
            qn: 'Something3',
            options: ['a', 'b', 'c', 'd'],
        },
        {
            qn: 'Something3',
            options: ['a', 'b', 'c', 'd'],
        },
        {
            qn: 'Something3',
            options: ['a', 'b', 'c', 'd'],
        },
        {
            qn: 'Something3',
            options: ['a', 'b', 'c', 'd'],
        },
    ]

  return (
    <div id="Quiz">
        {qns.map((q) => (
            <Question qn={q["qn"]} options={q["options"]} />
        )
        )}
    </div>
  )
}

export default Questions