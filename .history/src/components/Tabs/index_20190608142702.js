import React from 'react';

import { Container } from './styles';

import Icon from 'react-native-vector-icon'

export default function Header() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF"
        </TabItem>
      </TabsContainer>
      </Container>
  );
}
