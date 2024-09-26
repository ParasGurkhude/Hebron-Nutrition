import React, { useState } from 'react';
import './Ads.css';
import { Button } from '@chakra-ui/react';

const Ads = ({ slides }) => {
  const [count, setCount] = useState(0);
  const sliderStyles = {
    height: '100%',
    position: 'relative',
  };

  const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[count].path})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0,-50%)',
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  };
  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0,-50%)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  };
  const goToPrev = () => {
    const isFirstSlide = count === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : count - 1;
    setCount(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = count === slides.length - 1;
    const newIndex = isLastSlide ? 0 : count + 1;
    setCount(newIndex);
  };
  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
  };
  const dotStyles = {
    margin: '-50px 10px',
    cursor: 'pointer',
    fontSize: '30px',
  };
  const gotoSlide = (slideIndex) => {
    setCount(slideIndex);
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrev}> ⮜ </div>
      <div style={rightArrowStyles} onClick={goToNext}> ⮞ </div>
      <div style={slideStyles}>
        {count === 0 ? (
          <div className='btn'>
            <h1>Digestive and GI</h1>
            <Button colorScheme='purple' size='lg'>Shop Now</Button>
          </div>
        ) : count === 1 ? (
          <div className='btn'>
            <h1>Liver Support & Detoxifiction</h1>
            <Button colorScheme='purple' size='lg'>Shop Now</Button>
          </div>
        ) : (
          <div className='btn'>
            <h1>Immune Support</h1>
            <Button colorScheme='purple' size='lg'>Shop Now</Button>
          </div>
        )}
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div style={dotStyles} key={slideIndex} onClick={() => gotoSlide(slideIndex)}>•</div>
        ))}
      </div>
    </div>
  );
};

export default Ads;
