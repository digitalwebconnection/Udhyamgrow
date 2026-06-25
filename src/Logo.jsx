import React from 'react';
import logoImg from './assets/image-removebg-preview.png';

const Logo = ({ className = "h-14" }) => {
  return (
    <img 
      src={logoImg} 
      alt="Udhyamgrow Logo" 
      width={180}
      height={48}
      className={`${className} object-contain drop-shadow-lg drop-shadow-black/10`} 
    />
  );
};

export default Logo;
