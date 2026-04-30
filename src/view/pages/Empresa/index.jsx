import React from 'react';
import * as S from './styles';
import EmpresaHeader from './Header/index.jsx';
import Product from './components/Product/index.jsx';
import Mission from './components/Mission/index.jsx';
import ChatBotInfo from './components/ChatBot/index.jsx';
import EmployeeImmersion from './components/EmployeeImmersion/index.jsx';
import Working from './components/Working/index.jsx';
import Finish from './components/Finish/index.jsx';
import Footer from './components/Footer/index.jsx';

const Empresa = () => {
  return (
    <S.Container>
      <EmpresaHeader />
      <Product />
      <Mission />
      <ChatBotInfo />
      <EmployeeImmersion />
      <Working />
      <Finish />
      <Footer />
    </S.Container>
  );
};

export default Empresa;