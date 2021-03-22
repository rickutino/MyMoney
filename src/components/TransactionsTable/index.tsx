import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';


export const TransactionsTable: React.FC = () => {
  const transactions = useContext(TransactionsContext);

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