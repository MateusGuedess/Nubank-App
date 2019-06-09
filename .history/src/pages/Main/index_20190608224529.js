import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { SafeAreaView, Animated } from 'react-native';

import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';


import {
  Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation,
} from './styles';

export default function Main() {
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {

  }

  return (
    <Container>
      <SafeAreaView />
      <Header />

      <Content>
        <Menu />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [100, 380],
                outputRange: [0, 380],
                extrapolate: 'clamp',
              }),
            }],
          }}
          >
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
        </PanGestureHandler>
      </Content>

      <Tabs />
      <SafeAreaView />
    </Container>
  );
}
