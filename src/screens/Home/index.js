import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="bullseye-arrow" size={30} color="#d2cccc" />

          <BalanceContainer>
            <BalanceTitle>Gestor financeiro</BalanceTitle>
            <Balance>Mintset</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#d2cccc" />
        </Header>

        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}