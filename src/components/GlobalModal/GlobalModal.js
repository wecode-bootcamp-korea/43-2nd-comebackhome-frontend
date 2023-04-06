import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
import * as S from './GlobalModalStyle';

const GlobalModal = ({ text, isOpen, setIsOpen, count, id, checkList }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const modalSwitch = e => {
    const { value } = e.target;
    if (value === 'NO') {
      fetch(`${API.carts}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: token,
        },
        body: JSON.stringify({
          productId: id,
          quantity: Number(count),
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            setIsOpen(isOpen => !isOpen);
          }
        });
    } else if (!token) {
      navigate(`/signin`);
    } else if (token && value === 'YES') {
      fetch(`${API.carts}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: token,
        },
        body: JSON.stringify({
          productId: id,
          quantity: Number(count),
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            setIsOpen(isOpen => !isOpen);
            navigate(`/${text}`);
          }
        });
    }
  };

  if ((text === 'order' && !token) || (text === 'cart' && !token)) {
    setTimeout(() => {
      setIsOpen(isOpen => !isOpen);
      navigate('/signin');
    }, 1000);
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(isOpen => !isOpen)}
        style={S.CustomStyles}
      >
        로그인 해주세요!
      </Modal>
    );
  }

  if (text === '로그아웃') {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(isOpen => !isOpen)}
        style={S.CustomStyles}
      >
        로그아웃 되었습니다.
      </Modal>
    );
  }

  if (count === '') {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(isOpen => !isOpen)}
        style={S.CustomStyles}
      >
        수량을 입력해주세요
      </Modal>
    );
  }

  if (text === '구매' && checkList.length <= 0) {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(isOpen => !isOpen)}
        style={S.CustomStyles}
      >
        <S.Text>상품을 선택해주세요</S.Text>
      </Modal>
    );
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(isOpen => !isOpen)}
      style={S.CustomStyles}
    >
      <S.Text>이동 하시겠습니까?</S.Text>
      <S.ButtonWrap>
        <S.Button onClick={modalSwitch} value="NO">
          아니요
        </S.Button>
        <S.Button
          onClick={modalSwitch}
          value="YES"
          backColor="#568a35"
          color="white"
        >
          예
        </S.Button>
      </S.ButtonWrap>
    </Modal>
  );
};

export default GlobalModal;

Modal.setAppElement('#root');
