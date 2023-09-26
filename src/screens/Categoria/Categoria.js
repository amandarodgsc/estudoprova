import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlatList } from 'react-native-gesture-handler';
import Api from '../../services/Api';
import { useNavigation } from '@react-navigation/native';

export default function Categoria(props) {
  const categoriaRecebida = props.route.params;
  const [produtos, setProdutos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    Api.get(`/products/category/${categoriaRecebida}`)
      .then(response => {
        setProdutos(response.data.products);
        console.log(response.data.products);
      })
      .catch(error => {
        console.log("DEU ERRO NA CHAMADA DE CATEGORIAS: ", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categoria: {String(categoriaRecebida).toUpperCase()}</Text>

      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProdutoDetalhes', { produto: item })}>
            <View style={styles.produtoContainer}>
              <Text style={styles.produtoTitle}>{item.title}</Text>
              <Text style={styles.produtoDescription}>{item.description}</Text>
              <Text style={styles.produtoPrice}>Clique para detalhes:  {item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  produtoContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16, // Adicionado espaçamento inferior para separar os produtos
  },
  produtoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  produtoDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  produtoPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});
