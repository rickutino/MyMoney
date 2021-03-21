import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface TransactionData  {
  id: number,
  title: string,
  amount: number,
  type: 'deposit'| 'withdraw',
  category: string,
  createdAt: string
}
export const TransactionsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);
  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('ja', {
                    style: 'currency',
                    currency: 'JPY'
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('ja').format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Container>
  )
}