import React from 'react';

// Component
import SocialButton from './SocialButton'; 

// assets
import Google from '../../../assets/images/icons/google.svg';
import Twitter from '../../../assets/images/icons/twitter.svg';
import Facebook from '../../../assets/images/icons/facebook.svg';

// Css
import './FireBaseSocial.css';

const FireBaseSocial = () => {

  const googlehandler = async() => {
    // login || sign up
  }

  const twitterhandler = async() => {
    // login || sign up
  }

  const facebookhandler = async() => {
    // login || sign up
  }


  return (
    <div className='w-full flex justify-between items-center'>
        <SocialButton
          onClick={googlehandler}
          Logoimg={<div className='mr-2'><img src={Google} alt="google"/></div>}
        >
            Google
        </SocialButton>
        <SocialButton
          onClick={twitterhandler}
          Logoimg={<div className='mr-2'><img src={Twitter} alt="Twitter"/></div>}
        >
            Twitter
        </SocialButton>
        <SocialButton
          onClick={facebookhandler}
          Logoimg={<div className='mr-2'><img src={Facebook} alt="Facebook"/></div>}
        >
            Facebook
        </SocialButton>
    </div>
  )
}

export default FireBaseSocial