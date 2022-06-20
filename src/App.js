import React from 'react';
import {View, Image, Text ,StyleSheet, SafeAreaView, StatusBar,Text,Pressable, Linking} from 'react-native';

const colorGitHub = "#010409";  
const colorFontGitHub = '#C9D1D9'; 
const colorDarkFontGitHub = '#C9D1D9'; 

const ImageProfileGithub = 
    'https://avatars.githubusercontent.com/u/14929159?v=4';
const urlToMyGitHub = "https://github.com/isaiasbatista1" ;

const App = () => {

    const handlePressGoToGitHub = async ()=>{
       console.log('Verificando Link');
       const res = await Linking.canOpenUrl(urlToMyGitHub);
       console.log('Link aprovado');
       console.log('Abrindo o Link...');
       if (res) {
         await Linking.openURL(urlToMyGitHub);   
       }
    };

    return (
   <SafeAreaView style={style.text}> 
    <StatusBar backgroundColor={colorGitHub} barStyle="light-content"/>   
    <View style={style.content}>
        <Image 
         acessibilityLabel="Isaias foto de perfil do GitHub"
         style={style.avatar} 
         source={{uri: ImageProfileGithub}}
         />
         <Text acessibilityLabel="Nome: Isaias Batista "
         style={[style.defaultText, style.name]}>Isaias Batista</Text>
         <Text acessibilityLabel="Nickname: isaiasbatista1"
          style={[style.defaultText, style.nickname]}> isaiasbatistta </Text>
         <Text acessibilityLabel="Descrição: Biomedical training and self-taught Python and Javasscript student." 
         style={[style.defaultText, style.description]}>
             Biomedical training and self-taught Python and Javasscript student.
         </Text>
         <Pressable onPress={handlePressGoToGitHub}>
         <View style={style.button}> 
            <Text style={[style.defaultText, style.textButton]}
             Open in GitHub></Text>
         </View>
         </Pressable>
    </View>
   </SafeAreaView> 
    );
};

export default App;

const style = StyleSheet.create({
    container:{ 
        //Collumn 
        backgroundColor:'colorGitHub', 
        flex: 1, //Expandir para a tela inteira 
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    content:{
        alignItems: 'center', 
        padding: 20,
    },
    avatar: { 
        height: 200,
        weidth: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderwidth: 2,
    },
    defaultText:{
        color:colorFontGitHub,
    },
    name:{
        marginTop: 20,
        fontWeight:'bold',
        fontSize: 24,
    },   
    nickname:{
        fontSize: 18,
        color:colorDarkFontGitHub0,
    },
    description:{
        fontWeight:'bold',
        fontSize: 14,
    },  
    button:{
        marginTop: 20,
        backgroundColor: colorDarkFontGitHub, 
        borderRadius:10,
        padding: 20,
    },
    textButton:{
        fontWeight:'bold',
        fontSize: 14,
    },    
});