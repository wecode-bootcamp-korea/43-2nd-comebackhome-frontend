import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { ButtonWrap, Button, CustomStyles } from './GlobalModalStyle';

const GlobalModal = ({ text, isOpen, setIsOpen, count, id }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const modalSwitch = e => {
    const { value } = e.target;
    if (value === 'NO') {
      setIsOpen(isOpen => !isOpen);
    } else if (!token) {
      navigate(`/signin`);
    } else if (token && value === 'YES') {
      setIsOpen(isOpen => !isOpen);
      navigate(`/${text}`);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(isOpen => !isOpen)}
      style={CustomStyles}
    >
      {text}Page로 이동하시겠습니까?
      <ButtonWrap>
        <Button onClick={modalSwitch} value="NO">
          아니요
        </Button>
        <Button onClick={modalSwitch} value="YES">
          예
        </Button>
      </ButtonWrap>
    </Modal>
  );
};

export default GlobalModal;

Modal.setAppElement('#root');
