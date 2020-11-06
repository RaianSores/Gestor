import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Button = styled(LinearGradient)`
  width: 65px;
  height: 60px;
  border-radius: 80px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({ focused }) => focused ? '#000' : '#fff'};
`;