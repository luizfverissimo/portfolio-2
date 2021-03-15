import React from 'react';

function Background() {
  return (
    <img
      src='/bg.png'
      alt='background'
      className='z-under w-full h-full fixed top-0 left-0 opacity-60 object-cover'
    />
  );
}

export default Background;
