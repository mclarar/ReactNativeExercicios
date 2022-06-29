import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  body: {
    backgroundColor: '#e4e4e4',
    padding: 16,
  },
  categoriaContainer: {
    flexGrow: 0,
  },
  produtoContainer: {
    borderRadius: 5,
    padding: 0,
    width: 120,
    height: 250

  },
  // scrollCategoria: {
  //   display: 'flex',
  //   justifyContent: 'space-evenly'
  // },
  // view: {
  //   with: 150,
  //   height: 100,
  //   backgroundColor: '#292841',
  //   display: 'flex',
  //   justifyContent: 'center'
  // },
  botao_categoria: {
    alignItems: 'center',
    padding: 10
  },
  text_categoria: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  mais_pedidos: {

    justifyContent: 'center'
  },
  stretch: {
    width: 450,
    height: 300,
    resizeMode: 'stretch',
  },
  texto_pedidos: {
    textAlign: "center",
    backfaceVisibility: "hidden",
    fontSize: 23,
    color: '#f5ebeb',
    elevation: 3
  }


})