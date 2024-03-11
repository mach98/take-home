import React, { useState, ChangeEvent, useEffect } from 'react';
import CurrencyWidget from '../CurrencyWidget/CurrencyWidget';
import ConversionWidget from '../ConversionWidget/ConversionWidget';
import axios from 'axios';
import PaymentWithPaystack from '../PaymentWithPaystack/PaymentWithPaystack';

export type currencyType = 'USD' | 'EUR' | 'GBP';
type Rates = {
  [key in currencyType]?: number;
};

interface PaymentRef {
  message: string;
  redirecturl: string;
  reference: number;
  status: string;
  trans: number;
  transaction: number;
  trxref: number;
}

const MainWidget = () => {
  const [sendCurrency, setSendCurrency] = useState<currencyType>('USD');
  const [sendCurrencyValue, setSendCurrencyValue] = useState('0');
  const [receiveCurrency, setReceiveCurrency] = useState<currencyType>('GBP');
  const [receiveCurrencyValue, setReceiveCurrencyValue] = useState('0');
  const [rates, setRates] = useState<Rates>({});

  const paymentResponse = (ref: PaymentRef) => {
    console.log(ref);
  };

  const handleSendCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = event.target.value as currencyType;
    setSendCurrency(selectedCurrency);
  };

  const handleReceiveCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = event.target.value as currencyType;
    setReceiveCurrency(selectedCurrency);
  };

  const convertCurrency = (currency: currencyType) => {
    switch (currency) {
      case 'EUR':
        return ['USD', 'GBP'];
      case 'GBP':
        return ['USD', 'EUR'];
      case 'USD':
        return ['EUR', 'GBP'];
      default:
        return [];
    }
  };

  useEffect(() => {
    const fetchCurrency = async () => {
      const URL = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_21JfcssyCCOIihMbmoSfpUj8o310rP0voUTXhTiQ&currencies=${
        convertCurrency(sendCurrency)[0]
      }%2C${convertCurrency(sendCurrency)[1]}&base_currency=${sendCurrency}`;

      const response = await axios.get(URL);
      setRates(response.data.data);
    };

    fetchCurrency();
  }, [sendCurrency]);

  useEffect(() => {
    const newReceiveCurrencyValue = (
      parseFloat(sendCurrencyValue) * (rates[receiveCurrency] || 0)
    ).toString();
    setReceiveCurrencyValue(newReceiveCurrencyValue);
  }, [sendCurrencyValue, rates, receiveCurrency]);

  return (
    <div className='flex-1 bg-widgetsBgColor rounded-lg shadow-xl w-1/3 p-4 items-center'>
      <CurrencyWidget
        currency={sendCurrency}
        currencyValue={sendCurrencyValue}
        title='You Send'
        handleCurrencyChange={handleSendCurrency}
        onChange={(event) => setSendCurrencyValue(event.target.value)}
      />
      <ConversionWidget
        sendCurrency={sendCurrency}
        sendCurrencyValue={sendCurrencyValue}
        receivingCurrency={receiveCurrency}
        rate={rates[receiveCurrency] || 0}
      />
      <CurrencyWidget
        currency={receiveCurrency}
        currencyValue={receiveCurrencyValue}
        title='Receiver Gets'
        handleCurrencyChange={handleReceiveCurrency}
        onChange={(event) => {
          const newValue = event.target.value;
          setReceiveCurrencyValue(newValue);
          const newSendCurrencyValue = (
            parseFloat(newValue) / (rates[receiveCurrency] || 1)
          ).toString();
          setSendCurrencyValue(newSendCurrencyValue);
        }}
      />
      <PaymentWithPaystack
        amount={parseFloat(sendCurrencyValue)}
        paymentResponse={paymentResponse}
      />
    </div>
  );
};

export default MainWidget;
