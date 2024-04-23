import React from 'react'

const Question = ({ num, qn, options }) => {
  return (
    <>
        <h4>{num}.{qn}</h4>

        <label><input type="radio" name={num} value="a" /> {options[0]}</label><br />
        <label><input type="radio" name={num} value="b" /> {options[1]}</label><br />
        <label><input type="radio" name={num} value="c" /> {options[2]}</label><br />
        <label><input type="radio" name={num} value="d" /> {options[3]}</label><br />
    </>
  )
}

export default Question