import React from 'react';

import Icon from 'react-native-vector-icon'
import { Container } from './styles';


export default function Header() {
  return (
    <Container>
      <TabsContainer>
        <TabItem />
      </TabsContainer>
    </Container>
  );
}
