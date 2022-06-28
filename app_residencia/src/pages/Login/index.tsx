import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Input, Text, Icon, Button } from "react-native-elements";
import { LoginService } from "../../services/LoginService";



  const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async (email:string, senha:string) => {
        console.log("Email : ", email, "Senha :", senha);


        const respostaLogin = await LoginService(email, senha);
        if(!respostaLogin){
            Alert.alert(
                "Erro",
                "",
                [
                    {text: "OK"},
                    {text: "Não foi possível realizar o login."}
                ]
            );
        }else{
            
            navigation.navigate('Home',{
                screen: 'TabNavigationScreen',
                params: {
                    screen: 'HomeTabScreen',
                    params: {
                        token: respostaLogin.token,
                    } 
                },
            })
        }


    }
  

  return(
    
      <View style={styles.container}>
          <Text style={styles.texto_entrada}>{'Bem-vindo'}</Text>
          <Input
              placeholder='E-mail'
              onChangeText={setEmail}
              value={email}
              leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24} />}
          />
          <Input
              placeholder='E-mail'
              onChangeText={setSenha}
              value={senha}
              leftIcon={<Icon name='key' color='#000' type='font-awesome' size={24} />}
          />

          <Button
              title='Entrar'
              onPress={() => handleLogin(email, senha)}
              titleStyle={styles.title_Button}
          />
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#e4e4e4',
      padding: 16,
      alignItems: 'stretch',
      justifyContent: 'center'

  },
  texto_entrada: {
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom: 10,
      color: '#ffffff',

  },
  title_Button: {
      fontSize: 30,
  }
})
export default Login;