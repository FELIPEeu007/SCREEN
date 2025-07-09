import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-nactive';

export default function HomeScreen({
  navigation}) {
    return (
      <View style={styles.container}>
      <Text style={style.title}>Página Principal</Text>
      <Button
      titlt="Ir para Opções Deliciosas"
      onPress={() => navigation. navigate('Secondary')} color="#841584"
      />
      </View>
    );
  }

  const style = StyleSheet.creat({
    container: {
      flex: 1,
      justfyContent: 'center',
      alingItems: 'center',
      backgroundColor: '#f0f8ff',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#333', 
    },
  });




  

import{ NavigationContainer}
from '@react-navigation/native';
 
import{ creatStackNavigator}
from '@react-navigation/Stack';

import HomeScreen from
'./Screens/homescreens';

import SecondaryScreen from
'./Screen/SeconadryScreen';

import CafeScreen from
'./Screens/CafeScreens';

import BoloScreen from
'./Screens/BoloScreen';

import PaoScreen from
'./Screens/PaoScreen';

const Stack =  creatStackNavigator();

export  default function App() {
  return(
    <NavigationContainer>
    <StackNavigation initialrouuteName="Home"
    <Stack.Screen name="Home" component={HomeScreen} opitions={{ title: 'Bem-vindo!'}}/

    <Stack.Screen name="Secondary" component={SecondaryScreen} opitions={{ title: 'Opções Deliciosas'}}/>
    
    <Stack.Screen name="Cafe" component={CafeScreen} opitions={{ title: 'Nosso Café'}}/>

    <Stack.Screen name="Bolo" component={BoloScreen} opitions={{ title: 'Bolo de Chocolate' }}/>

    <Stack.Screen name="Pão" component={PaoScreen} opitions={{ title: 'Pão Caseiro'}}/>
</Stack.Navigatior>
</NavigationContainer
  );
}













