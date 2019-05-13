import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import api from '../../services/api';
import socket from 'socket.io-client';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default class Main extends Component {
    state = { pedido: {} };

    async componentDidMount() {
        //const box = await AsyncStorage.getItem('@DevBox:box');
        //this.subscribeToNewFiles(box);
        const response = await api.get(`pedido/5ccf0e0ab7c0ab3e049dda31`);
        this.setState({ pedido: response.data });
    }

    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() =>{}} style={styles.pedido}>
          <View style={styles.fileInfo}>
            <Text style={styles.pedidoTitle}>{item.descricao}</Text>
          </View>
        </TouchableOpacity>
      );
    

    includeItem = () => {
        this.props.navigation.navigate('Insert');
    }

    render() {
        return ( 
            <View style={styles.container}>
                <Text style={styles.titleTxt}>Pedido Nº 1</Text>
                {/*<FlatList style={styles.list}
                    data={[{key: 'a'}, {key: 'b'}]}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />*/}
                <FlatList 
                    style={styles.list}
                    data={this.state.pedido}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    renderItem={({item}) => <Text>{item.pedido}</Text>}
                />
                <TouchableOpacity style={styles.floatButton} onPress={this.includeItem}>
                    <Icon name='add' size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
        );
    }
}