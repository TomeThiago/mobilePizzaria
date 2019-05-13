import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default class Main extends Component {
    state = { 
        pedido: {},
    };

    async componentDidMount() {
        //const box = await AsyncStorage.getItem('@DevBox:box');
        //this.subscribeToNewFiles(box);
        const response = await api.get(`pedido/5ccf0e0ab7c0ab3e049dda31`);
        this.setState({ pedido: response.data });
    }

    renderItem = ({ item }) => (
        <TouchableOpacity style={styles.pedido} onPress={() => {}}>
            <View style={styles.pedidoInfo}>
                <Text style={styles.pedidoTitle}>{item._id}</Text>
            </View>
        </TouchableOpacity>
    );

    novoPedido = () => {
        this.props.navigation.navigate('Itens');
    }

    render() {
        return ( 
            <View style={styles.container}>
                <Text style={styles.titleTxt}>Pedidos</Text>
                {/*<FlatList 
                    style={styles.list}
                    data={this.state.pedido}
                    keyExtractor={pedido => pedido._id}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    renderItem={this.renderItem}
                />*/}

                <TouchableOpacity style={styles.floatButton} onPress={this.novoPedido}>
                    <Icon name='add' size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
        );
    }
}