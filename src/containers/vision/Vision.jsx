import React from 'react';
import './vision.css';
import vis from '../../assets/vis.png'

const Vision = () => {
  return (
    <div className='vision section__padding' >
      <div className='vision-image' >
        <img src={vis} alt='vision' width={360} height={270} />
      </div>
      <div className='vision-content' >
        <h2>Our vision</h2>
        <p>"To revolutionize personal finance management by providing a user- friendly and comprehensive app that empowers users to achieve their financial goals with ease and confidence."</p>
      </div>
    </div>
  )
}

export default Vision