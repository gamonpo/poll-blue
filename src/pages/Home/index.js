import React from 'react';
import { Text } from 'react-native';

import { Feather } from '@expo/vector-icons'

import { Container, Field, IView, Email, Password, Button } from './styles';

import back from '../../assets/back.png'

export default function Home({ navigation }) {
  return (
    <Container source={back}>
      <Field>
        <IView>
          <Feather name="mail" size={24} color="#FFFFFF"/>
          <Email placeholder={"Email"} />
        </IView>        
        <IView>
          <Feather name="lock" size={24} color="#FFFFFF"/>
          <Password placeholder={"Password"} />
        </IView>

        <Button onPress={() => navigation.navigate('Main')}>
          <Text style={{ color: '#FFFFFF' }} >Entrar</Text>
        </Button>
      </Field>
    </Container>
  )
}
