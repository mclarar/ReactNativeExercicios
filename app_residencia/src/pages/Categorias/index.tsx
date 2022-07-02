import React, { useState } from "react";
import { TouchableOpacity, ScrollView, Image, StyleSheet, View } from "react-native";
import { Input, Icon } from "react-native-elements";

import gameboy from "../../assets/images/gameboy.png"
import colecionaveis from "../../assets/images/colecionaveis.png"
import gamecontrol from "../../assets/images/gamecontrol.png"
import virtualreality from "../../assets/images/virtualreality.png"
import arcade from "../../assets/images/arcade.png"
import pcgamer from "../../assets/images/pcgamer.png"
import game from "../../assets/images/game.png"
import d20 from "../../assets/images/d20.png"
import { Text } from "react-native-elements";
const Categoria = () => {
    const [busca, setBusca] = useState('');
    return (
        <>

            <ScrollView style={styles.container}>
                <View>

                    <Input

                        placeholder='buscar categoria'
                        placeholderTextColor={'#000'}
                        onChangeText={setBusca}
                        value={busca}
                        leftIcon={<Icon name='search' color='#000' type='font-awesome' size={24} />}
                    />

                </View>
                <ScrollView style={styles.body} horizontal={true}>
                    <View style={styles.view}>
                        <TouchableOpacity
                            onPress={() => console.log('categoria Consoles clicada')}>
                            <Image source={gameboy} style={styles.image} />
                        </TouchableOpacity>
                        <Text style={styles.texto}>{'Consoles'}</Text>
                    </View>
                    <View style={styles.view}>
                        <TouchableOpacity
                            onPress={() => console.log('categoria Colecionaveis clicada')}>
                            <Image source={colecionaveis} style={styles.image} />
                            <Text style={styles.texto}>{'Colecionáveis'}</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
                <ScrollView style={styles.body} horizontal={true}>
                    <View style={styles.view}>
                        <TouchableOpacity
                            onPress={() => console.log('categoria Manetes clicada')}>
                            <Image source={gamecontrol} style={styles.image} />
                            <Text style={styles.texto}>{'Manetes'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view}>
                        <TouchableOpacity
                            onPress={() => console.log('categoria Acessorios clicada')}>
                            <Image source={virtualreality} style={styles.image} />
                            <Text style={styles.texto}>{'Acessórios'}</Text>
                        </TouchableOpacity>
                    </View>


                </ScrollView>

                <ScrollView style={styles.body} horizontal={true}>
                    <View style={styles.view}>
                        <TouchableOpacity
                            onPress={() => console.log('categoria Board Games clicada')}>
                            <Image source={game} style={styles.image} />
                            <Text style={styles.texto}>{'Board Games'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view}>
                        <TouchableOpacity
                            onPress={() => console.log('categoria Diversos clicada')}>
                            <Image source={d20} style={styles.image} />
                            <Text style={styles.texto}>{'Diversos'}</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
                <ScrollView style={styles.body} horizontal={true}>
                    <View style={styles.view}>
                        <TouchableOpacity
                            onPress={() => console.log('categoria Jogos clicada')}>
                            <Image source={arcade} style={styles.image} />
                            <Text style={styles.texto}>{'Jogos'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view}>
                        <TouchableOpacity
                            onPress={() => console.log('categoria PC Gamer clicada')}>
                            <Image source={pcgamer} style={styles.image} />
                            <Text style={styles.texto}>{'PC Gamer'}</Text>
                        </TouchableOpacity>
                    </View>


                </ScrollView>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e4e4e4',
        padding: 16,


    },
    body: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        marginLeft: 35

    },
    view: {
        padding: 16
    },

    image: {
        width: 90,
        height: 90
    },
    texto: {
        textAlign: 'center',
        fontSize: 15
    }
})
export default Categoria;