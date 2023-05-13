import React from 'react';
import './cta.css';
import cta2 from '../../assets/cta2.png'

const CTA = () => {
  return (
    <div className='cta section__padding' >
      <div className='cta__container'>
        <div className='cta__container-image' >
          <img src={cta2} alt='cta' width={240} height={250} />
        </div>
        <div className='cta__container-content'>
          <div className='cta__container-content-texts'>
            <h2 className='text-color-one'>
              Be the 1st one to know when we launch, 
              <span className='color-green'> join our waitlist</span>
            </h2>
            <p className='text-color-two'>
              We'll email you when we launch, expect to see a mail from us by mid March
            </p>
          </div>
          <div className='cta__container-content-input'>
            <input type='email' placeholder='Email address' />
            <button>Join Waitlist</button>
          </div>
          <p  className='text-color-two'>Your data is in the safe hands. <span className='text-color-blue' >Privacy policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default CTA