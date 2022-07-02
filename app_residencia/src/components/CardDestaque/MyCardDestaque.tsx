import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import Produto from '../../pages/Produtos';



interface CardImgProps {
  imagem: any;
  texto: string;


}

export function CardImg({ imagem, texto }: CardImgProps) {


  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProdutoScreen')}
    >
      <View style={styles.container}>
        <View
          style={styles.card}>

          <Image
            style={styles.image}
            source={{ uri: imagem }}
          />
          <Text
            style={styles.text}
          >
            {texto}
          </Text>


        </View>
      </View>
    </TouchableOpacity>
  )
}