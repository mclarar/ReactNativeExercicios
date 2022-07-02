import React from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Image, FlatList, } from "react-native";
import { Card } from "react-native-elements";
import AxiosInstance from "../../api/AxiosInstance";
import { useState, useEffect } from "react";
import { CardImg } from "../../components/CardDestaque/MyCardDestaque";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../App";
import { styles } from './styles';
import { Input, Icon } from "react-native-elements";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { useContext } from "react";
import { MyCard } from "../../components/Card/MyCard";

type CategoriaType = {
    idCategoria: number;
    nomeCategoria: string;
    nomeImagem: string;
}

type ProdutoType = {
    idProduto: number;
    sku: string;
    nomeProduto: string;
    imagemProduto: any;
}

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
    const { usuario } = useContext(AutenticacaoContext);
    const [categoria, setCategoria] = useState<CategoriaType[]>([]);
    const [produto, setProduto] = useState<ProdutoType[]>([]);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        getDadosCategoria();
        getProdutos();
    }, [])

    useEffect(() => {
        pesquisarCategoria(busca);
    }, [busca])


    const getProdutos = async () => {
        AxiosInstance.get(
            `/produto`,
            { headers: { "Authorization": `Bearer ${usuario.token}` } }

        ).then(
            result => {
                console.log('Dados dos produtos' + JSON.stringify(result.data));
                setProduto(result.data);
            }).catch((error) => {
                console.log('Erro ao carregar a lista de produtos' + JSON.stringify(error));
            });
    }
    const getDadosCategoria = async () => {
        AxiosInstance.get(
            `/categoria`,
            { headers: { "Authorization": `Bearer ${usuario.token}` } }
        ).then(
            result => {
                console.log('Dados das categorias' + JSON.stringify(result.data));
                setCategoria(result.data);
            }).catch((error) => {
                console.log('Erro ao carregar a lista de categoria' + JSON.stringify(error));
            });
    }
    // console.log('Token: ' +token);

    const pesquisarCategoria = (busca: string) => {
        if (busca !== '') {
            setCategoria(
                categoria.filter(response => response.nomeCategoria.toUpperCase().includes(busca.toUpperCase())),
            );
        } else {
            getDadosCategoria();
        }
    }


    return (

        <View style={styles.container}>
            <ScrollView style={styles.body}>

                <View>

                    <Input

                        placeholder='buscar categoria'
                        placeholderTextColor={'#000'}
                        onChangeText={setBusca}
                        value={busca}
                        leftIcon={<Icon name='search' color='#000' type='font-awesome' size={24} />}
                    />

                </View>

                <Text>{'Categorias'}</Text>



                <FlatList
                    data={categoria}
                    horizontal={true}
                    renderItem={({ item }) =>
                        <MyCard texto={item.nomeCategoria}

                        />}
                />

                <Text>{'Recentes'}</Text>

                <FlatList
                    data={produto}
                    horizontal={true}
                    renderItem={({ item }) => <CardImg texto={item.nomeProduto} imagem={item.imagemProduto} />}
                />



            </ScrollView>
        </View>
    )
}


export default Home;