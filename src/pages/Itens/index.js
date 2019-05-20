import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default class Main extends Component {
    state = { 
        itens: [], 
        total: 0
    };

    componentDidMount() {
        this.loadItems();
    }

    loadItems = async () => {
        const pedido = await AsyncStorage.getItem('@DeliveryNow: pedido');
        const response = await api.get(`/pedido/5ccf0e0ab7c0ab3e049dda31/itens`);
        this.setState({ itens:  response.data });
        console.log(itens);
    };

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {}} style={styles.items}>
            <View style={styles.pedidoContainer}>
                <Text style={styles.itemDescricao}>{item.descricao}</Text>
            </View>
            <Text style={styles.itemQuantidade}>{item.quantidade}</Text>
            <Text style={styles.itemPreco}>{item.preco}</Text>
        </TouchableOpacity>
    );

    includeItem = (ID) => {
        //await AsyncStorage.setItem('@DeliveryNow: pedido', ID);
    }

    render() {
        return (
                <View style={styles.container}>

                    <FlatList
                        contentContainerStyle={styles.list}
                        data={this.state.itens.itens}
                        keyExtractor={itens => itens._id}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        renderItem={this.renderItem}
                    />

                    <TouchableOpacity style={styles.floatButton} onPress={this.includeItem}>
                        <Icon name='add' size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>
        );
    }
}