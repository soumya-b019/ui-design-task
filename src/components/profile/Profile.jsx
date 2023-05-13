import React from 'react';
import './profile.css';
import fb from '../../assets/Media/fb.png'
import twt from '../../assets/Media/twt.png'
import linkdin from '../../assets/Media/linkdin.png'
import insta from '../../assets/Media/insta.png'

const Profile = ({imgUrl, name, pos, content, social}) => {
  return (
    <div className='team-container_profile'>
      <div className='team-container_profile-image'>
        <img src={imgUrl} alt='pics' />
      </div>
      <div className='team-container_profile-content'>
        <div className='team-container_profile-content-heads'>
          <h3> {name} </h3>
          <h4> {pos} </h4>
        </div>
          <p> {content} </p>
        <div className='team-container_profile-content-socials'>
          <img src={fb} alt='fb' width={24} height={24} />
          <img src={twt} alt='twt' width={24} height={24} />
          <img src={linkdin} alt='linkdin' width={24} height={24} />
          <img src={insta} alt='insta' width={24} height={24} />
        </div>
      </div>
    </div>
  )
}

export default Profile