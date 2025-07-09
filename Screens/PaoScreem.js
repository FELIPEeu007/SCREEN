imnport React from 'react';

import{View, text, Image, StyleSheet} from 'react-native';

export default function PaoScreen(){
return(
<View style= {styles.container}>
<Text style= {styles.title}>Um Pao
<Image
source={(uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9mZU_q_Fl2rvQCoHdOIh6zfwomNVjBIwSQ&s')}
style={style.Image}
<Text style={style.description}>
Comece o dia com um pedação de paõ fresquinho.
<Text>
</View>
);
}

const styles = styleSheet.creater({
container: {
flex: 1,
justifyContent:'center',
alignItems: 'center',
backgroundColor:'#fffaf0',
padding: 20,
},
Title: {
fontSize: 24,
fontweight: "bold"
marginBottom:20,
color: '#8b4513',
},

image:{
widt:200,
height:200,
borderRadius:'100,imnport React from 'react';
marginBottom:20,
borderColor: '#deb887',
borderWidth:3,
},

description: {
fontSize: 18,
textAlign:'center',
color:'#a0522d',
margenHorizontal:15,
linerHeight: 25,
},
});

