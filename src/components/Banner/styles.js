import styled from 'styled-components/native';

export const Container = styled.View`
  background: #6282BB;
  margin: 25px 16px;
  border-radius: 8px;
  height: 150px;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Img = styled.Image``;

export const Title = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #000;
  font-size: 14px;
  margin-top: 15px;
`;