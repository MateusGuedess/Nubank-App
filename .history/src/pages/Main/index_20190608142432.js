import React from 'react';

import { SafeAreaView } from 'react-native'
import Header from '../../components/Header';


import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <SafeAreaView />
      <Header />
    </Container>
  );
}
