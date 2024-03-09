import React from 'react';
import { Input, Select, Box } from '@chakra-ui/react';

const SendWidget = () => {
  return (
    <Box className='flex flex-row bg-white  p-4 justify-between w-1/2 rounded rounded-lg'>
      <div className='w-1/2'>
        <p className='mb-3'>You Send</p>
        <div className=''>
          <Input variant='unstyled' placeholder='$0' />
        </div>
      </div>
      <div className='w-20 self-center'>
        <Select>
          <option value='gbp'>GBP</option>
          <option value='eur'>EUR</option>
          <option value='usd'>USD</option>
        </Select>
      </div>
    </Box>
  );
};

export default SendWidget;
