import React from 'react';
import Modal from 'react-modal';
import { API } from '../../config';
import { useNavigate } from 'react-router-dom';
import * as S from './GlobalModalStyle';

const OrderModal = ({ isOpen, setIsOpen, orderer }) => {
  const navigate = useNavigate();
  const { user, areaCode, phone, address, detaileAddress } = orderer;

  if (!user || !areaCode || !phone || !address || !detaileAddress) {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(isOpen => !isOpen)}
        style={S.CustomStyles}
      >
        <S.Text>배송지 정보를</S.Text>
        <S.Text>다시 한번 확인해주세요</S.Text>
      </Modal>
    );
  } else {
    if (isOpen) {
      fetch(`${API.orders}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          receiverName: user,
          receiverPhoneNumber: areaCode + phone,
          receiverAddress: address + detaileAddress,
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            setTimeout(() => {
              setIsOpen(isOpen => !isOpen);
              navigate('/');
            }, 1000);
          }
        });
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(isOpen => !isOpen)}
      style={S.CustomStyles}
    >
      <S.Text>구매 완료</S.Text>
      <S.Text>메인 페이지로 이동합니다.</S.Text>
    </Modal>
  );
};

export default OrderModal;
