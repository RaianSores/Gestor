import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #ffffff;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;

export const Balance = styled.Text`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
