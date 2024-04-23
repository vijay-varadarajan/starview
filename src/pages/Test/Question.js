import React from 'react'

const Question = ({ qn, options }) => {
  return (
    <>
        <h4>{qn}</h4>
        <form>
            <label><input type="radio" name="Quiz" value="a" /> {options[0]}</label><br />
            <label><input type="radio" name="Quiz" value="b" /> {options[1]}</label><br />
            <label><input type="radio" name="Quiz" value="c" /> {options[2]}</label><br />
            <label><input type="radio" name="Quiz" value="d" /> {options[3]}</label>
        </form>
    </>
  )
}

export default Question