imnport React from 'react';

import{View, text, Image, StyleSheet} from 'react-native';

export default function CafeScreen(){
return(
<View style= {styles.container}>
<Text style= {styles.title}>Um Café
<Image
source={(uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fxicara-cafe&psig=AOvVaw0QA4BWkZ5fT0yweSvhTPu9&ust=1751713970266000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjFl5eKo44DFQAAAAAdAAAAABAE')}
style={style.Image}
<Text style={style.description}>
Comece o dia com uma xícara de café aromática e revigoranta.
<Text>
</View>
);
}

const styles = styleSheet.creater({
container: {
flex: 1,
justifyContent:'center',
alignItems: 'center',
backgroundColor:'#f5f5dc',
padding: 20,
},
Title: {
fontSize: 24,
fontweight: "bold"
marginBottom:20,
color: '#5c4033',
},

image:{
widt:200,
height:200,
borderRadius:'100,imnport React from 'react';
marginBottom:20,
borderColor: '#d2b48c',
borderWidth:3,
},

description: {
fontSize: 18,
textAlign:'center',
color:'#654321',
margenHorizontal:15,
linerHeight: 25,
},
});
