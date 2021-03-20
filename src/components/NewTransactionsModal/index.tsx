import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export const NewTransactionsModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Container>
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
        >
          <h2>Test</h2>
        </Modal>

    </Container>
  )
}
