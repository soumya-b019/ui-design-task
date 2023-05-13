import React from 'react';
import './team.css';
import { Profile } from '../../components';
import { Image01, Image02, Image03, Image04 } from './imports'
import { fb, twt, linkdin, insta } from './imports'

const Dummytext = () => {
  return(
    "Lorem ipsum dolor sit amet cons, adip elit. Dolo aperiam voluus eius velit enim totam numquam eum, disti laborum accs."
  )
}

const Socials = () => {
  return(
    <>
      <img src={fb} alt='fb' width={24} height={24} />
      <img src={twt} alt='twt' width={24} height={24} />
      <img src={linkdin} alt='linkdin' width={24} height={24} />
      <img src={insta} alt='insta' width={24} height={24} />
    </>
  )
}

const Team = () => {
  return (
    <div className='team section__padding' id='team'>
      <div className='team-heading'>
        <h2 className='text-color-one'>
          Meet our Team
        </h2>
        <p className='text-color-two'>
          The Billex Team is a group of talented individuals hustling day and night to simply personal finance for Indians
        </p>
      </div>

      <div className='team-container'>
        <div className='team-container_group'>

          <Profile imgUrl={Image01} name={'Lana Steiner'} 
          pos={'Founder & CEO'} content={<Dummytext/>} 
          social ={<Socials/>} />

          <Profile imgUrl={Image02} name={'Phoenix Baker'} 
          pos={'Founder & CMO'} content={<Dummytext/>} 
          social ={<Socials/>} />

          <Profile imgUrl={Image03} name={'Koray Okumus'} 
          pos={ 'Sr. Product Designer'} content={<Dummytext/>} 
          social ={<Socials/>} />

          <Profile imgUrl={Image04} name={'Ava Wright'} 
          pos={'Jr. Frontend Developer'} content={<Dummytext/>} 
          social ={<Socials/>} />
          
        </div>
      </div>
    </div>
  )
}

export default Team