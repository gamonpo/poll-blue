import React from 'react';

import { Feather } from '@expo/vector-icons'

import { AppLoading } from 'expo';

import { useFonts, Abel_400Regular } from '@expo-google-fonts/abel';

import { 
 Container,
 Header,
 Title,
 BackButton,
 Image,
 Description,
 Vote,
 VoteTitle,
} from './styles';

export default function Item({ navigation, route }){
  
  let [fontsLoaded] = useFonts({
    Abel_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const { item } = route.params

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
         <Feather name="arrow-left" size={24} color={'#3F3F3F'}/>
        </BackButton>
       <Title style={{ fontFamily: 'Abel_400Regular' }}> Participantes </Title>
      </Header>

      <Image source={item.image} />

      <Description style={{ fontFamily: 'Abel_400Regular' }}>
        {item.description}
      </Description>

      <Vote>
        <VoteTitle style={{ fontFamily: 'Abel_400Regular' }}>
          Votar
        </VoteTitle>
      </Vote>
    </Container>
  );
}
