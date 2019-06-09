import React from 'react';

import QRCode from 'react-native-qrcode'
import { Container } from './styles';


export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="http://rocketseat.com.br"
          size={80}
          bgColor="#FFF"
          fgColor="#8B10AE"
        />
      </Code>
    </Container>
  );
}
