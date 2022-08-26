import { createContext, useState } from 'react';

export const PaymentContext = createContext({
  paymentStaus: false,
  setPaymentStatus: () => {},
});

export const PaymentProvider = ({ children }) => {
  const [paymentStaus, setPaymentStatus] = useState(false);
  const value = { paymentStaus, setPaymentStatus };

  return (
    <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
  );
};
