import React from 'react';
import './hero.css';
import Vector from '../../assets/Vector.png'
import Frame_9 from '../../assets/Frame_9.png'

const Hero = () => {
  return (
    <div className='hero section__padding id="hero" '>
      <div className='hero-content'>
        <h2 className='text-color-one'>
          A <span className='color-green'>team</span> dedicated to make managing of <span className='text-color-blue'>finance easy</span> for India 
        </h2>
      </div>

      <div className='hero-image'>
        <div className='hero-image-vector'>
          <img src={Vector} alt='abstract-blue' width={330} height={220} />
        </div>
        <div className='hero-image-frame' >
          <img src={Frame_9} alt='people' width={329} height={388} />
        </div>
        {/* <img className='imaged' src={Vector} alt='abstract-blue' width={330} height={220} />
        <img className='imageu' src={Frame_9} alt='people' width={329} height={388} /> */}
      </div>

    </div>
  )
}

export default Hero