import React from "react";
import { useContext } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { CartContext } from "../../context/CartContext";


const Produto = ({ route, navigation }) => {

  const { id_produto, sku, nome_produto, descricao, imagem_produto, preco_produto } = route.params;
  const { addCart } = useContext(CartContext);

  const handleAddProduto = () => {


    addCart(sku, nome_produto, descricao, preco_produto, imagem_produto)
  }

  return (
    <View>
      <View style={styles.container}>
        <Text>img</Text>
      </View>
      <View style={styles.leftSide}>
        <Text style={styles.nome_produto}>{nome_produto}</Text>
        <Text style={styles.preco_produto}>{preco_produto}</Text>
        <TouchableOpacity
          style={styles.btt_comprar}
          onPress={() => handleAddProduto()}>
        </TouchableOpacity>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.txt_btt_comprar}>comprar</Text>
        <TouchableOpacity
          style={styles.btt_fav}>
          <Text style={styles.txt_btt_fav}>fav</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      backgroundColor: '#ffdf88',
      padding: 16,
      allignItems: 'stretch',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    leftSide:
    {
      width: '50%'
    },
    rightSide:
    {
      width: '50%'
    },
    btt_fav:
    {
      padding: 10,
      borderBottomWidth: 2,
      borderColor: '#000'
    },
    btt_comprar:
    {
      backgroundColor: '#000',
      padding: 10,
      marginBottom: 20,
      width: '70%'
    },
    nome_produto:
    {
      fontSize: 24,
      color: '#000',
      fontWeight: 'bold',
      marginBottom: 20
    },
    preco_produto:
    {
      fontSize: 20,
      color: '#000',
      fontWeight: 'bold',
      marginBottom: 20
    },
    txt_btt_comprar:
    {
      color: '#fff',
      backgroundColor: '#000',
    },
    txt_btt_fav:
    {
      textAlign: 'center',
      backgroundColor: '#000',
    },
  })

export default Produto;

