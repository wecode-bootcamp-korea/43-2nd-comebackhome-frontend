import React from 'react';
import * as S from './CartCheckboxStyle';

const CartCheckbox = ({ changeSingleBox, checkList, id }) => {
  const isChecked = checkList?.includes(id);

  return (
    <S.CartCheckbox
      type="checkbox"
      onChange={event => changeSingleBox(event.target.checked, id)}
      checked={isChecked ? true : false}
    />
  );
};

export default CartCheckbox;
