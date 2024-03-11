import React, { FC, ChangeEvent } from 'react';
import { Input, Select, Box } from '@chakra-ui/react';

interface CurrencyWidgetProps {
  currency: 'USD' | 'EUR' | 'GBP';
  currencyValue: string;
  title: string;
  handleCurrencyChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CurrencyWidget: FC<CurrencyWidgetProps> = ({
  currency,
  currencyValue,
  title,
  handleCurrencyChange,
  onChange,
}) => {
  const placeholderValue =
    currency === 'USD'
      ? `$ ${currencyValue}`
      : currency === 'EUR'
      ? `€ ${currencyValue}`
      : `£ ${currencyValue}`;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const parsedValue = parseFloat(inputValue);
    if (isNaN(parsedValue)) {
      const syntheticEvent = {
        target: { value: '0' },
      } as ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    } else {
      const syntheticEvent = {
        target: { value: parsedValue.toString() },
      } as ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };

  return (
    <Box className='flex flex-row bg-white  p-4 justify-between w-full rounded rounded-lg'>
      <div className='w-1/2'>
        <p className='mb-3'>{title}</p>
        <div className=''>
          <Input
            variant='unstyled'
            placeholder={placeholderValue}
            onChange={handleInputChange}
            type='number'
            required
          />
        </div>
      </div>
      <div className='w-20 self-center'>
        <Select onChange={handleCurrencyChange} value={currency}>
          <option value='GBP'>GBP</option>
          <option value='EUR'>EUR</option>
          <option value='USD'>USD</option>
        </Select>
      </div>
    </Box>
  );
};

export default CurrencyWidget;
