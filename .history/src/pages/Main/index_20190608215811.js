import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { SafeAreaView } from 'react-native';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <SafeAreaView />
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 97.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transfêrencia de R$ 20,00 recebidade de Diego Schell Fernandes hoje ás 06:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
      <SafeAreaView />
    </Container>
  );
}
