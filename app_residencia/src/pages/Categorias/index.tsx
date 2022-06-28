import React from "react";
import { TouchableOpacity, ScrollView,Image,StyleSheet, View} from "react-native";
import burger from "../../assets/icons/burger.png";
import cupcake from "../../assets/icons/cupcake.png";
import drink from "../../assets/icons/drink.png";
import hotdog from "../../assets/icons/hotdog.png";
import icecream from "../../assets/icons/icecream.png";
import noodle from "../../assets/icons/noodle.png";
import pieceofcake from "../../assets/icons/pieceofcake.png";
import frenchfries from "../../assets/icons/frenchfries.png";
import gingerbread from "../../assets/icons/gingerbread.png";
import doughnut from "../../assets/icons/doughnut.png";
import croissant from "../../assets/icons/croissant.png";
import crab from "../../assets/icons/crab.png";
import corn from "../../assets/icons/corn.png";
import cookie from "../../assets/icons/cookie.png";
import coffeecup from "../../assets/icons/coffeecup.png";
import chocolatebar from "../../assets/icons/chocolatebar.png";
import apple from "../../assets/icons/apple.png";
import honey from "../../assets/icons/honey.png";
const Categoria = () =>{

    return(
        <>
        <ScrollView style={styles.container}>
            <ScrollView style={styles.parte_um} horizontal = {true}>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={burger} style={styles.image}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={cupcake} style={styles.image}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={drink} style={styles.image}/>
            </TouchableOpacity>
            </View>
            </ScrollView>
            <ScrollView style={styles.parte_um} horizontal = {true}>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={hotdog} style={styles.image}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={icecream} style={styles.image}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={noodle} style={styles.image}/>
            </TouchableOpacity>
            </View>
            </ScrollView>
            <ScrollView style={styles.parte_um} horizontal = {true}>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={pieceofcake} style={styles.image}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={frenchfries} style={styles.image}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={gingerbread} style={styles.image}/>
            </TouchableOpacity>
            </View>
            </ScrollView>
            <ScrollView style={styles.parte_um} horizontal = {true}>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={doughnut} style={styles.image}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={croissant} style={styles.image}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={crab} style={styles.image}/>
            </TouchableOpacity>
            </View>
            </ScrollView>
            <ScrollView style={styles.parte_um} horizontal = {true}>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={corn} style={styles.image}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={cookie} style={styles.image} />
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={coffeecup} style={styles.image}/>
            </TouchableOpacity>
            </View>
            </ScrollView>
            <ScrollView style={styles.parte_um} horizontal = {true}>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={chocolatebar} style={styles.image}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={apple} style={styles.image}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={honey} style={styles.image}/>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#e4e4e4',
    padding: 16
  },
  parte_um:{
    display:'flex',
    flexDirection:'row',
    padding:16
   

  },
  view:{
    padding: 10
  },
 
  image:{
      width: 90,
      height:90
  }
})
export default Categoria;