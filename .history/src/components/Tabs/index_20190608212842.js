import React from 'react';

import Icon from 'react-native-vector-icon';

import { Container, TabsContainer, TabItem } from './styles';


export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
