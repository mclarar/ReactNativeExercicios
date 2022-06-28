import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#e4e4e4',
    padding: 16
  },
  scrollCategoria:{
      flexGrow: 0
  },
  view:{
      with: 150,
      height: 100,
      backgroundColor: '#292841',
      justifyContent:'center'
  },
  botao_categoria:{
      alignItems:'center',
      padding: 10
  },
  text_categoria:{
      color: '#fff',
      textAlign:'center',
      fontWeight:'bold'
  },
  mais_pedidos:{
      
      justifyContent:'center'
  },
  stretch: {
      width: 450,
      height: 300,
      resizeMode: 'stretch',
    },
    texto_pedidos:{
      textAlign:"center",
      backfaceVisibility:"hidden",
      fontSize:23,
      color:'#f5ebeb',
      elevation:3
    }


})