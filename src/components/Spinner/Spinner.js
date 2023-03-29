import React from 'react';
import { PacmanLoader } from 'react-spinners';
import * as S from './SpinnerStyle';

const Spinner = () => {
  return (
    <S.Wrap>
      <PacmanLoader color="#568a35" />
    </S.Wrap>
  );
};

export default Spinner;
