import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

export default class Main extends Component {
    state = { 
        pedido: [], 
        pedidoInfo: {},
        page: 1,
        novoPedido: ''
    };

    async componentDidMount() {
        this.loadPedidos();
    }

    loadPedidos = async (page = 1) => {
        const response = await api.get(`/pedido?page=${page}`);
        const { docs, ...pedidoInfo } = response.data;
        this.setState({ 
            pedido: [... this.state.pedido, ...docs], 
            pedidoInfo ,
            page
        });
    }

    novoPedido = async () => {
        //const response = await api.post('/pedido', {})
        await AsyncStorage.setItem('@DeliveryNow: pedido', '5ccf0e0ab7c0ab3e049dda31'/*response.data._id*/);
        this.props.navigation.navigate('Itens');
    }

    /*consultarPedido = async () => {
        await AsyncStorage.setItem('@DeliveryNow: pedido', '5ccf0e0ab7c0ab3e049dda31');
        this.props.navigation.navigate('Itens');
    }*/

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {}} style={styles.items}>
            <View style={styles.pedidoContainer}>
                <Text style={styles.pedidoNumero}>{item.numero}</Text>
            </View>
            <Text style={styles.pedidoMesa}>{item.mesa}</Text>
            
            <Text style={styles.pedidoTotal}>{item.total}</Text>    
        </TouchableOpacity>
    );

    loadMoreItems = () => {
        const { page, pedidoInfo } = this.state;

        if (page === pedidoInfo.pages) return;

        const pageNumber = page + 1;

        this.loadPedidos(pageNumber);
    }

    render() {
        return ( 
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={this.state.pedido}
                        keyExtractor={item => item._id}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        renderItem={this.renderItem}
                        refreshing={true}
                        onEndReached={this.loadMoreItems}
                        onEndReachedThreshold={0.2}
                    />
                    
                    <TouchableOpacity style={styles.floatButton} onPress={this.novoPedido}>
                        <Icon name='add' size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}