import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
        <p>Join us today and embrace the joy of learning !</p>
        <div className='Btn'>
            <Link to={'/EducationDashboard'}>Start Learning</Link>
            <Link to={'/GamesDashboard'}>Play Games</Link>
        </div>
    </div>
  )
}

export default Footer