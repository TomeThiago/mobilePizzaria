import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';

import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

export default class Info extends Component {
    state = { 
        pedido: [], 
        mesa: '',
        cliente: ''
    };

    async componentDidMount() {
        const pedido = await AsyncStorage.getItem('@DeliveryNow: pedido');
        const response = await api.get(`/pedido/${pedido}/itens`);
        this.setState({ pedido:  response.data });
    }

    voltaPedido = () => {
        ToastAndroid.show('Pedido salvo com sucesso!', ToastAndroid.SHORT);
        this.props.navigation.navigate('Main');
    }

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.containerPedido}>
                    <Text style={styles.titlePedido}>Pedido Nº {this.state.pedido.numero}</Text>
                </View>

                <TextInput style={styles.input}
                    placeholder="Digite a mesa do pedido"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    onChangeText={(mesa) => this.setState({mesa})}
                    underlineColorAndroid="transparent"
                />

                <TextInput style={styles.input}
                    placeholder="Digite o nome do cliente"
                    placeholderTextColor="#999"
                    onChangeText={(mesa) => this.setState({mesa})}
                    underlineColorAndroid="transparent"
                />

                <View style={styles.containerTotal}> 
                    <Text style={styles.titleTotal}>R$ 100,00</Text>           
                </View> 
                
                <TouchableOpacity style={styles.floatButton} onPress={this.voltaPedido}>
                    <Icon name='save' size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
        );
    }
}