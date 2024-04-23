import React from 'react'

const PlanetRow = ({ planetPosition, image, content }) => {
    const style = {
        width: "100%",
        display: "flex",
        flexDirection: planetPosition === "left" ? "row" : "row-reverse",
        alignItems: "center",
        justifyContent: "space-around",
    } 

    const src = `./images/${image}.gif`

  return (
    <div style={style}>
        <img src={src} alt={image} height="300px"/>
        <p>
            <h3>{image}</h3>
            {content}
        </p>
    </div>
  )
}

export default PlanetRow