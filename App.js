import React from 'react';
import {NavigationContainer}
from '@react-navigation/native';

import {creatStackNavigator}
from'@react-navigation/stack';

import HomeScreen from '. /screens/homescreen';
import SecondaryScreen from './screens/SecondaryScreen';
import CafeScreen from './screens/CafeScreen';
import BoloScreen from './screens/Boloscreen';
import PaoScreen from './screens/PaoScreen';

const Stack = creatStackNavigation();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator InitialRouteName="Home">
    <Stack.Screen Name="Home" Componente={HomeScreen} Opitions={{ title: 'Bem-vindo!'}}
    <Stack.Screen Name="Secondary" Componenente={SecondayScreen} Opitions={{ title: "Oções Deliciosas"}} />
    <Stack.Screen Name="Cafe" Componente={CafeScreen} Opitions {{title "Cafe"}}>
    <Stack.Scren Name="Bolo" Componenente={BoloScreen} Opitions={{title: "Bolo"}}
    Stack.Screen Name="Pao" Componenente={PaoScreen} Opitions= {{title: "Pao Caseiro"}}
    </Stack.Navigation>
    </Navigatorcontainer>
  );
};

