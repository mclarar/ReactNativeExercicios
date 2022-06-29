import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { styles } from './styles';



interface MyCardProps {
    texto: string;

}

export function MyCard({ texto }: MyCardProps) {


    return (
        <TouchableOpacity
            onPress={() => console.log(`Categori Clicada`)}
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