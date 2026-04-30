import React from 'react';
import * as S from './styles';
import screenImage from '../../../../../../assets/images/Screen.svg';

const Working = () => {
  return (
    <S.Container>
      <h1>Funcionamento na Prática</h1>
      <img src={screenImage} alt="Funcionamento na Prática" />
    </S.Container>
  );
};

export default Working;
