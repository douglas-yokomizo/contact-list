import * as S from "./Modal.style";


interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  if (isOpen) {
    return (
      <S.Background>
        <S.Modal>
          {children}
        </S.Modal>
      </S.Background>
    )
  } else {
    return null
  }
}

export default Modal;
