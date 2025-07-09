import{ view, Text, Button, StylesShest}
From 'react-native';

export default function SecondaryScreen
({ navigation}) ;{
return
<View style={style.container}>
<Text style={styles.title}>
Escolha sua Delicia!</Text>

</View>

<View style={styles.buttonContainer}>
<Button
titlte="Cafe"
onPress={() => navigation.navigate('Cafe')}
color= "#a0522d"
/>
</View>

<View style={styles.buttonContainer}>
<Button
title="Bolo de Chocolate"
onPress={() => navigation.navigate('Bolo')}
color= "#3b4513"
/>
</View>

</View style={styles.buttonContainer}>
<Button
title="Pão Caseiro"
onPress={() => navigation.navigete("Pao")}
color= "#deb387"
/>
</View>
</View>

const style = StyleSheet.creat({
  container: {
    flex: 1,
    justfyContent: 'center',
    alingItems: 'center',
    backgroundColor: '#fffafa',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginButtom: 40,
    color: '#444',
  };
  buttonContainer: {
    marginVertical: 10,
    width: '60%',
  },
});

                                                       ''