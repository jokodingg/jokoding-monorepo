import { createContext, useContext, useState } from 'react';
import OrderForm from './OrderForm';

const OrderFormContext = createContext(null);

// Tombol order di mana pun cukup memanggil useOrderForm().open() untuk membuka Form Order Singkat.
export const OrderFormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OrderFormContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <OrderForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </OrderFormContext.Provider>
  );
};

export const useOrderForm = () => useContext(OrderFormContext);
