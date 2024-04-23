import React, { useEffect, useState } from 'react';

const PlanetRow = ({ planetPosition, image, content }) => {
  const [flexDirection, setFlexDirection] = useState(
    window.innerWidth < 1000 ? 'column' : (planetPosition === 'left' ? 'row' : 'row-reverse')
  );

  useEffect(() => {
    const handleResize = () => {
      setFlexDirection(window.innerWidth < 1000 ? 'column' : (planetPosition === 'left' ? 'row' : 'row-reverse'));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const style = {
    width: '100%',
    display: 'flex',
    flexDirection: flexDirection,
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  const src = `./images/${image}.gif`;

  return (
    <div style={style}>
      <img src={src} alt={image} height="300px" />
      <p>
        <h3>{image}</h3>
        {content}
      </p>
    </div>
  );
};

export default PlanetRow;