import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityBase, View } from "react-native";
import { Icon, Text } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { CartContext } from "../../context/CartContext";
import { styles } from './styles';


const Carrinho = () => {

  const { listarProdutos } = useContext(CartContext);
  const [carrinho, setCarrinho] = useState('');

  useEffect(() => {

  }, []);

  const getDadosCarrinho = () => {
    setCarrinho(listarProdutos());
  }

  return (
    <FlatList
      data={carrinho}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => {
        <View style={styles.container_flatlist}>
          <Text>{item.id_produto}</Text>
          <Text>{item.sku}</Text>
          <Text>{item.nome_produto}</Text>
          <Text>{item.descricao}</Text>
          <Text>{item.preco_produto}</Text>
          <TouchableOpacity
            onPress={() => console.log(`Deletar o produto de ID ${item.id_produto}`)}>
            <Icon name='trash' color='#000' type='font-awesome' size={36} />

          </TouchableOpacity>
        </View>
      }}
    />


  )

}


export default Carrinho;