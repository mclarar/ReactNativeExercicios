import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { styles } from './styles';



interface CardImgProps {
  imagem: any;
  texto: string;

}

export function CardImg({ imagem, texto }: CardImgProps) {


  return (
    <View style={styles.container}>
      <View
        style={styles.card}>

        <Image
          style={styles.image}
          source={imagem}
        />
        <Text
          style={styles.text}
        >
          {texto}
        </Text>

      </View>
    </View>
  )
}