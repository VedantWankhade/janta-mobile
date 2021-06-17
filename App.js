import React from "react";
import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.Text`
  font-size: 48px;
  font-weight: bold;
`;

const P = styled.Text`
  margin: 24px 0;
  font-size: 18px;
`;

const Main = () => {
    return (
        <CenteredView>
            <H1>Hello World!</H1>
            <P>This is my App.</P>
            <Image source={require('./assets/images/hello-world.jpg')} />
        </CenteredView>
    );
}

export default Main;