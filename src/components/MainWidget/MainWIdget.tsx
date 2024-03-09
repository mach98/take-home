import React from 'react';
import SendWidget from '../SendWidget/SendWidget';
import ConversionWidget from '../ConversionWidget/ConversionWidget';
import ReceiveWidget from '../ReceiveWidget/ReceiveWidget';

const MainWidget = () => {
  return (
    <div className='flex-1 bg-widgetsBgColor rounded-lg shadow-xl w-1/2 p-4 items-center'>
      <SendWidget />
      <ConversionWidget />
      <ReceiveWidget />
    </div>
  );
};

export default MainWidget;
