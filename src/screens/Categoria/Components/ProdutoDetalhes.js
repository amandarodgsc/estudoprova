// ProdutoDetalhes.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProdutoDetalhes({ route }) {
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Produto</Text>
      <View style={styles.produtoContainer}>
        <Text style={styles.produtoTitle}>{produto.title}</Text>
        <Text style={styles.produtoDescription}>{produto.description}</Text>
        <Text style={styles.produtoPrice}>Preço: R$ {produto.price.toFixed(2)}</Text>
      </View>
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
