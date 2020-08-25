import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import Home from './pages/Home'
import Main from './pages/Main'
import Item from './pages/Item'

export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={'Home'} component={Home} />
        <Screen name={'Main'} component={Main} />
        <Screen name={'Item'} component={Item} />
      </Navigator>
    </NavigationContainer>
  )
}