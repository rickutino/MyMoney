import { useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export const Summary: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })
  
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income"/>
        </header>
        <strong>
          {new Intl.NumberFormat('ja', {
            style: 'currency',
            currency: 'JPY'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="outcome"/>
        </header>
        <strong>
          - {new Intl.NumberFormat('ja', {
            style: 'currency',
            currency: 'JPY'
          }).format(summary.withdraws)}
         </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total"/>
        </header>
        <strong>
          {new Intl.NumberFormat('ja', {
            style: 'currency',
            currency: 'JPY'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}
