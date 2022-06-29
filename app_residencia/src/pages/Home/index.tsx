import React from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { Card } from "react-native-elements";
import AxiosInstance from "../../api/AxiosInstance";
import { useState, useEffect } from "react";
import { CardImg } from "../../components/CardDestaque/MyCardDestaque";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../App";
import { styles } from './styles';
import { Input } from "react-native-elements";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { useContext } from "react";

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
        getDadosCetegoria();
        getProdutos();
    }, [])


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
    const getDadosCetegoria = async () => {
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


    return (


        <ScrollView style={styles.container}>
            {/* <ScrollView>
                <View>
                    <Input

                        placeholder='buscar'
                        onChangeText={setBusca}
                        value={busca}
                        leftIcon={<Icon name='magnifying-glass' color='#000' type='font-awesome' size={24} />}
                    />
                </View>
            </ScrollView> */}
            <Text>{'Categorias'}</Text>
            <ScrollView style={styles.scrollCategoria} horizontal={true}>
                {
                    categoria.map((k, i) => (
                        <TouchableOpacity
                            key={i}
                            onPress={() => console.log(`Categoria ${k.nomeCategoria} Clicada`)}
                            style={styles.botao_categoria}
                        >
                            <View style={styles.view}>
                                <Text style={styles.text_categoria}>{k.nomeCategoria}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>

            <Text>{'Recentes'}</Text>

            <ScrollView horizontal={true}>
                {
                    produto.map((k, i) => (
                        <TouchableOpacity
                            key={i}
                            onPress={() => console.log(`Produto ${k.nomeProduto} Clicado`)}

                        >
                            <CardImg
                                imagem={k.imagemProduto}
                                texto={k.nomeProduto}

                            />
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </ScrollView>
    )
}


export default Home;