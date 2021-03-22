import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface TransactionData  {
  id: number,
  title: string,
  amount: number,
  type: 'deposit'| 'withdraw',
  category: string,
  createdAt: string
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<TransactionData[]>([]);

export function TransactionsProvider({ children }:TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);
  
  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}