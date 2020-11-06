import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }
  
  return (
    <Wrapper>
      <Header
        colors={
          useBalance
            ? ['#0001', '#0009']
            : ['#D3D3D3', '#868686']
        }
      >
        <HeaderContainer>
          <Title>Entradas</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
            </Value>

            <EyeButton onPress={handleToggleVisibility}>
              <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
            </EyeButton>
          </BalanceContainer>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <ActionLabel>Aberto</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Forma de pagamento
        </PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>
                Cadastre seu cartão de crédito
              </CardTitle>
              <CardInfo>
                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
              </CardInfo>
            </CardDetails>

            <Img source={creditCard} resizeMode="contain" />
          </CardBody>

          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0DB060" />
            <AddLabel>
              Adicionar cartão de crédito
            </AddLabel>
          </AddButton>
        </Card>
      </PaymentMethods>
    </Wrapper>
  );
}