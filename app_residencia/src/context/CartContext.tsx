import React from "react";
import Realm from "realm";
import { createContext } from "react";


export const CartContext = createContext({});

class ProdutosSchema extends Realm.Object { }

ProdutosSchema.schema = {
  name: 'Produto',
  properties: {
    id_produto: { type: 'init', default: 0 },
    sku: 'string',
    nome_produto: 'string',
    preco_produto: 'double',
    imagem_produto: 'string',
  }

}
let realm_carrinho = new Realm({ schema: [ProdutosSchema], schemaVersion: 1 });

export function CartProvider({ children }) {
  const listarProdutos = () => {
    return realm_carrinho.objects('Produto');
  }

  const CountCart = () => {
    return realm_carrinho.objects('Produto').length;
  }

  const addCart = (_sku: string, _nome: string, descricao: string, _preco: number, _imagem: string) => {

    const ultimoProdutoCadastrado = realm_carrinho.objects('Produto').sorted('id_produto', true)[0];
    const ultimoIdCadastrado = ultimoProdutoCadastrado === null ? 0 : ultimoProdutoCadastrado.id_produto;
    const proximoId = ultimoIdCadastrado == null ? 1 : ultimoIdCadastrado + 1;

    realm_carrinho.write(() => {
      const produto = realm_carrinho.create('Produto', {
        id_produto: proximoId,
        sku: _sku,
        nome_produto: _nome,
        preco_produto: descricao,
        imagem_produto: _imagem,
      });
    });

    console.log(JSON.stringify(listarProdutos()));

    const removerItemCarrinho = (_id) => {
      realm_carrinho.write(() =>
        realm_carrinho.delete(
          realm_carrinho.objects('Produto').filter(produto => produto.id_produto == _id)
        ))
    }

  }
}

return (
  <CartContext.Provider value={{
    listarProdutos,
    CountCart,
    addCart,
  }}>
    {children}
  </CartContext.Provider>
)
};