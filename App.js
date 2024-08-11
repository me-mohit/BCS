import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MaterialNaviagtion from './Navigation/MaterialNaviagtion';

export default function App() {
  return (
    <NavigationContainer>
      <MaterialNaviagtion />
    </NavigationContainer>
  )
}