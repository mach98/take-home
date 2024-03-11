import { usePaystackPayment } from 'react-paystack';
import SendMoneyButton from '../SendMoneyButton/SendMoneyButton';

const PaymentWithPaystack = ({amount=0, paymentResponse}) => {
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: amount * 100,
    publicKey: 'pk_test_b52a205b288a51f63bf39a4eb1ef7a71a5b51c3b',
  };
  
  const handleSuccess = (ref) => {
   paymentResponse(ref)
   
  };
  

  const onClose = () => {
  console.log('closed')
  }
  
  const PaystackHook = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
          <SendMoneyButton onClick={() => {
              initializePayment(handleSuccess, onClose)
          }}/>
      </div>
    );
  };
  return (
    <div>
      <PaystackHook/>
    </div>
    
  )
}

export default PaymentWithPaystack