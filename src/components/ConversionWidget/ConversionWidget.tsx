import React, { FC } from 'react';
import { Icon, createIcon } from '@chakra-ui/react';
import { currencyType } from '../MainWidget/MainWidget';

interface ConversionWidgetProp {
  sendCurrency: currencyType;
  sendCurrencyValue: string;
  receivingCurrency: currencyType;
  rate: number;
}

const ConversionWidget: FC<ConversionWidgetProp> = ({
  sendCurrency,
  sendCurrencyValue,
  receivingCurrency,
  rate,
}) => {
  return (
    <div className='w-full px-3'>
      <div className='flex flex-row justify-between my-4'>
        <h4>Fee</h4>
        <h4 className='font-semibold'>FREE</h4>
      </div>
      <div className='flex flex-row justify-between my-4'>
        <h4>Total to pay</h4>
        <h4>{`${parseFloat(sendCurrencyValue)} ${sendCurrency}`}</h4>
      </div>
      <div className='flex flex-row justify-between my-4'>
        <h4>Rate + Bonus</h4>
        <h4>{`1 ${sendCurrency} = ${rate} ${receivingCurrency}`}</h4>
      </div>
    </div>
  );
};

export default ConversionWidget;
