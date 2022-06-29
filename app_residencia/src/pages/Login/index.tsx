import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Input, Text, Icon, Button } from "react-native-elements";
// import { StackParamList } from "../../App";
import { styles } from './styles';
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { useContext } from "react";




const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useContext(AutenticacaoContext);


    const handleLogin = async (email: string, senha: string) => {
        console.log("Email : ", email, "Senha :", senha);
        setLoading(true)
        const respostaLogin = await login(email, senha);


        if (!respostaLogin) {
            Alert.alert(
                "Erro",
                "",
                [
                    { text: "OK" },
                    { text: "Não foi possível realizar o login." }
                ]
            );
            setLoading(false)
        } else {
            setLoading(false);
            navigation.navigate('Home')

        }
    }





    return (

        <View style={styles.container}>
            <Text style={styles.texto_entrada}>{'Bem-vindo'}</Text>
            <Input
                inputStyle={styles.input}
                placeholder='E-mail'
                placeholderTextColor={'#e4e4e4'}
                onChangeText={setEmail}
                value={email}
                leftIcon={<Icon name='user' color='#e4e4e4' type='font-awesome' size={24} />}
            />
            <Input
                inputStyle={styles.input}
                placeholder='Senha'
                placeholderTextColor={'#e4e4e4'}
                onChangeText={setSenha}
                value={senha}
                leftIcon={<Icon name='key' color='#e4e4e4' type='font-awesome' size={24} />}
                secureTextEntry
            />

            <Button
                style={styles.botao}
                title='Entrar'
                onPress={() => handleLogin(email, senha)}
                titleStyle={styles.title_Button}

            />
            <View>
                <ActivityIndicator animating={loading} size={'large'} color="#00ff00" />
            </View>
        </View>
    )
}


export default Login;