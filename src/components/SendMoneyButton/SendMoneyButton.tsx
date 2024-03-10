import React, { MouseEvent, FC } from 'react';
import { Button } from '@chakra-ui/react';

interface SendMoneyButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SendMoneyButton: FC<SendMoneyButtonProps> = ({ onClick }) => {
  return (
    <Button
      size='md'
      height='55px'
      bg='#6931a1'
      color='#fff'
      className='my-5 w-full'
      borderRadius='9999px'
      fontSize='large'
      _hover={{ bg: '#50257a' }}
      onClick={onClick}
    >
      Send Money
    </Button>
  );
};

export default SendMoneyButton;
