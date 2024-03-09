import React from 'react';

const ConversionWidget = () => {
  return (
    <div className='w-1/2 px-3'>
      <div className='flex flex-row justify-between my-2'>
        <h4>Fee</h4>
        <h4 className='font-semibold'>FREE</h4>
      </div>
      <div className='flex flex-row justify-between my-2'>
        <h4>Total to pay</h4>
        <h4>0.00</h4>
      </div>
      <div className='flex flex-row justify-between my-2'>
        <h4>Rate + Bonus</h4>
        <h4>1 + 2223232</h4>
      </div>
    </div>
  );
};

export default ConversionWidget;
