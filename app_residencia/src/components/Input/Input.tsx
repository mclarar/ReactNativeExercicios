import React, { useState } from "react";
import { Input } from "react-native-elements";
import { View } from 'react-native';

interface InputProps {
  texto: string;
}

export function InputBar({ texto }: InputProps) {

  const [categoria, setCategoria] = useState('');

  return (
    <View>
      <Input

        placeholder='buscar'
        onChangeText={setCategoria}
        value={categoria}
        leftIcon={<Icon name='magnifying-glass' color='#000' type='font-awesome' size={24} />}
      />
    </View>
  )
}