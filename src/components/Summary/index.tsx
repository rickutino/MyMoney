import { useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export const Summary: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);
  
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income"/>
        </header>
        <strong>¥4000</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="outcome"/>
        </header>
        <strong>- ¥2000</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total"/>
        </header>
        <strong>¥2000</strong>
      </div>
    </Container>
  )
}
