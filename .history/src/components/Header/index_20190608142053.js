import React from 'react';

import icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/Nubank_Logo.png';

import {
  Container, Top, Logo, Title,
} from './styles';


export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Mateus</Title>
      </Top>
    </Container>
  );
}
