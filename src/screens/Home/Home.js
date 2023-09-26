import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import Api from '../../services/Api'
import CategoriaItem from '../Categoria/Components/CategoriaItem/CategoriaItem'

export default function Home({ navigation, route }) {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {

        Api.get('/products/categories')
            .then(response => {
                setCategorias(response.data)
            })
            .catch(error => {
                console.log("DEU ERRO NA CHAMDA DE CATEGORIAS: ", error)
            })

    }, [])



    return (
        <View style={styles.container}>

            <View style={styles.titleArea}>
                 
            </View>

            <FlatList
                style={{ width: '60%' }}
                data={categorias}
                renderItem={({ item }) => <CategoriaItem categoria={item} navigation={navigation} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white', // Verde com 50% de opacidade
    },
    titleArea: {
        backgroundColor: 'white',
        width: '100%',
          
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 1,

    }
})