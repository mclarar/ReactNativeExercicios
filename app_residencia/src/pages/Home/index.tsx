import React from "react";
import { ScrollView, StyleSheet, View,TouchableOpacity,Text, Image } from "react-native";
import {  Card } from "react-native-elements";
import AxiosInstance from "../../api/AxiosInstance";
import { useState, useEffect } from "react";

type CategoriaType ={
    idCategoria: number;
    nomeCategoria: string;
    nomeImagem: string;
}


const Home = ({route, navigation}) =>{
   const {token} = route.params;
   const [categoria, setCategoria] = useState<CategoriaType[]>([]);

   useEffect(()=>{
    getDadosCetegoria();
}, [])

   const getDadosCetegoria = async()=>{
        AxiosInstance.get(
            `/categoria`,
            {headers:{"Authorization":`Bearer ${token}`}}
        ).then(
            result =>{
                console.log('Dados das categorias' +JSON.stringify(result.data));
                setCategoria(result.data);
            }).catch((error)=>{
                console.log('Erro ao carregar a lista de categoria'+ JSON.stringify(error));
            });
   }
    // console.log('Token: ' +token);

    
    return(
        <ScrollView style = {styles.container}>
            <Text>{'Categorias'}</Text>
        <ScrollView style = {styles.scrollCategoria} horizontal = {true}>
            {
                categoria.map((k, i)=>(
            <TouchableOpacity
            key={i}
            onPress={() => console.log(`Categoria ${k.nomeCategoria} Clicada`)}
            style = {styles.botao_categoria}
            >
            <View style = {styles.view}>
                <Text style = {styles.text_categoria}>{k.nomeCategoria}</Text>
            </View>
            </TouchableOpacity>
                ))
            }
        </ScrollView>
        <Text>{'Recentes'}</Text>
        <ScrollView style={styles.container_recentes} horizontal = {true}>
        <TouchableOpacity>
            <Card >
                <Card.Image source={{ uri: 'https://picsum.photos/700' }}/>
                <Card.Divider/>
                <Card.Title>
                    Titulo
                </Card.Title>
                <Text> {'Descrição'}</Text>
            </Card>
            </TouchableOpacity>
            <TouchableOpacity>
            <Card >
                <Card.Image source={{ uri: 'https://picsum.photos/700' }}/>
                <Card.Divider/>
                <Card.Title>
                    Titulo
                </Card.Title>
                <Text> {'Descrição'}</Text>
            </Card>
            </TouchableOpacity>
            <TouchableOpacity>
            <Card >
                <Card.Image source={{ uri: 'https://picsum.photos/700' }}/>
                <Card.Divider/>
                <Card.Title>
                    Titulo
                </Card.Title>
                <Text> {'Descrição'}</Text>
            </Card>
            </TouchableOpacity>
            <TouchableOpacity>
            <Card >
                <Card.Image source={{ uri: 'https://picsum.photos/700' }}/>
                <Card.Divider/>
                <Card.Title>
                    Titulo
                </Card.Title>
                <Text> {'Descrição'}</Text>
            </Card>
            </TouchableOpacity>
        </ScrollView>
        <Text>{'Mais Pedidos da sua Região'}</Text>
        <ScrollView>
        <TouchableOpacity>
                <View style = {styles.mais_pedidos}>
                {/* <Image source={{uri: 'asset:/lombinho.jpg'}} 
                style={styles.stretch}/> */}
                <Image source={{ uri: 'https://picsum.photos/700' }}
                style={styles.stretch}
                />
                <Text style={styles.texto_pedidos}>{'Lombinho'}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {styles.mais_pedidos}>
                <Image source={{ uri: 'https://picsum.photos/700' }}
                style={styles.stretch}
                />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {styles.mais_pedidos}>
                <Image source={{ uri: 'https://picsum.photos/700' }}
                style={styles.stretch}
                />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {styles.mais_pedidos}>
                <Image source={{ uri: 'https://picsum.photos/700' }}
                style={styles.stretch}
                />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {styles.mais_pedidos}>
                <Image source={{ uri: 'https://picsum.photos/700' }}
                style={styles.stretch}
                />
                </View>
            </TouchableOpacity>
        </ScrollView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#e4e4e4',
      padding: 16
    },
    scrollCategoria:{
        flexGrow: 0
    },
    view:{
        with: 150,
        height: 100,
        backgroundColor: '#ff0000',
        justifyContent:'center'
    },
    botao_categoria:{
        alignItems:'center',
        padding: 10
    },
    text_categoria:{
        color: '#fff',
        textAlign:'center',
        fontWeight:'bold'
    },
    mais_pedidos:{
        
        justifyContent:'center'
    },
    stretch: {
        width: 450,
        height: 300,
        resizeMode: 'stretch',
      },
      texto_pedidos:{
        textAlign:"center",
        backfaceVisibility:"hidden",
        fontSize:23,
        color:'#f5ebeb',
        elevation:3
      }
    });
    
    export default Home;