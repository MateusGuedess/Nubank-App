import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode';
import { Container, Code } from './styles';


export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="http://rocketseat.com.br"
          size={80}
          fgColor="#FFF"
          bgColor="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
        </NavItem>
      </Nav>
    </Container>
  );
}
