import React from 'react';
import { FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons'

import { AppLoading } from 'expo';
import { useFonts, Abel_400Regular } from '@expo-google-fonts/abel';

import { 
  Header,
  Info, 
  Avatar,
  Welcome,
  TextTitle,
  ListTitle,
  ShortLine, 
  LongLine, 
  Image, 
  Bar, 
  Name, 
  Icon 
} from './styles';

import profile from '../../assets/profile.jpg'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

export default function Main({ navigation }){
  const DATA = [
    {
      id: '1',
      title: 'Le Jardin',
      image: img1,
      description: "Residencial Le Jardin é a escolha perfeita para uma excelente qualidade de vida,contando com: vizinhança amigável,viaturas de segurança com objetivo de oferecer o melhor para os moradores!"
    },
    {
      id: '2',
      title: 'Evian',
      image: img2,
      description: "Evian Thermas tem restaurante, recepção 24h, bar, jardim, piscina, parquinho infantil, lugar ideal para toda a família, e ainda possui varanda com vista para a cidade!"

    },
    {
      id: '3',
      title: 'Olimpia Thermas',
      image: img3,
      description: "Apartamento com jardim, 2 quartos, cozinha com fogão embutido, sala de estar com TV de tela plana com canais via satélite!"
    }
  ]
  
  let [fontsLoaded] = useFonts({
    Abel_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  const renderItem = ({ item }) => (
    <Image source={item.image}>
      <Bar>
        <Name style={{ fontFamily: 'Abel_400Regular' }}>
          {item.title}
        </Name>
        
        <Icon onPress={() => navigation.navigate('Item', { item })}>
        
          <Feather name="arrow-right" size={24} color={'#FFFFFF'}/>

        </Icon>
      </Bar>
    </Image>
  );

  return (
    <>
      <Header>
        <Info>
          <Avatar source={profile}/>
          <Welcome style={{ fontFamily: 'Abel_400Regular' }}>
            Olá, Gabriel Monteiro
          </Welcome>
        </Info>
        
        <ListTitle>
          <ShortLine />

          <TextTitle style={{ fontFamily: 'Abel_400Regular' }}>Conheça os concorrentes</TextTitle>

          <LongLine />
        </ListTitle>

        
      </Header>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
    </>
    
  );
}
