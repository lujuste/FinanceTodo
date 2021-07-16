import Modal from 'react-modal';
import './styles'
import { Container } from './styles';
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button type="button">
                <img src={closeImg}
                    onClick={onRequestClose}
                    alt="Fechar modal"
                    className="react-modal-close"
                />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Titulo"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <button type="submit">
                    Cadastrar
                </button>


            </Container>
        </Modal>

    )
}