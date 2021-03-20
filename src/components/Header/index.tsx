import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  OnOpenNewTransactionModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ OnOpenNewTransactionModal }) => {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="tameru"/>
        <button
          type="button"
          onClick={OnOpenNewTransactionModal}
        >
          New transaction
        </button>
      </Content>
    </Container>
  )
}
