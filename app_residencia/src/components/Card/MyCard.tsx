import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import Categoria from '../../pages/Categorias';
import { styles } from './styles';




interface MyCardProps {
    texto: string;

}

export function MyCard({ texto }: MyCardProps) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('CategoriasDrawerScreen')}
        >
            <View style={styles.container}>
                <View
                    style={styles.card}>

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

