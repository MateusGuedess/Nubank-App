import styled from 'styled-components/native';

import { View, Text } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #8B10AE;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled.View`
  flex: 1;
  background: #FFF;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
`;

export const CardHeader = styled.View`
  flex-direciton: row;
  justify-content: space-between;
`;

export const CardContent = styled.View`

`;

export const Title = styled.Text`

`;

export const Description = styled.Text`

`;

export const CardFooter = styled.View`

`;

export const Annotation = styled.Text`

`;
