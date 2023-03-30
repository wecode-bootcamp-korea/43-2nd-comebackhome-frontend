import React from 'react';
import * as S from './CheckboxInputStyle';

const CheckboxInput = ({ changeAllbox, checkList, checkboxNum }) => {
  return (
    <S.CheckboxInput
      type="checkbox"
      onChange={event => changeAllbox(event.target.checked)}
      checked={checkList.length === checkboxNum ? true : false}
    />
  );
};

export default CheckboxInput;
