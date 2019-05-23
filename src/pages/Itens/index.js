import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
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
        const response = await api.get(`/pedido/${pedido}/itens`);
        this.setState({ itens:  response.data });
    };

    loadOptions = () => {
        Alert.alert(
            'Alerta',
            'Deseja excluir o item selecionado?',
            [
              {
                text: 'Não',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'Sim', onPress: () => Alert.alert('Atenção','Item excluído com sucesso!')},
            ],
            {cancelable: false},
          );
    }

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {}} style={styles.items} onLongPress={() => this.loadOptions()}>
            <View style={styles.pedidoContainer}>
                <Text style={styles.itemDescricao}>{item.descricao}</Text>
            </View>
            <Text style={styles.itemQuantidade}>{item.quantidade}</Text>
            <Text style={styles.itemPreco}>{item.preco}</Text>
        </TouchableOpacity>
    );

    includeItem = async () => {
        const pedido = await AsyncStorage.getItem('@DeliveryNow: pedido');
        alert(pedido);
        this.props.navigation.navigate('Insert');
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