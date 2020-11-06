import React from 'react';

import { Container, Details, Img, Title, Description } from './styles';

import img13 from '../../images/13.png';

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Indique nosso sistema</Title>

        <Description>
          Receba comissões pelas indicações dos nossos produtos.
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
}