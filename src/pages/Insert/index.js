import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ToastAndroid, Picker, Alert } from 'react-native';

import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Main extends Component {
    state = {
        descricao: '',
        quantidade: 1,
        tamanho: 'Grande',
        preco: 0,
        total: 0
    }

    backinItem = async () => {
        if (! this.state.descricao){
            Alert.alert('Atenção','Pizza não informada!');
            return
        } else if (! this.state.quantidade){
            Alert.alert('Atenção','Quantidade não informada!');
            return
        } else if (!this.state.preco){
            Alert.alert('Atenção','Quantidade não informada!');
            return
        }
        
        const data = new FormData();

        data.append('itens', {
            descricao: this.state.descricao,
            tamanho: this.state.tamanho,
            quantidade: this.state.descricao,
            preco: this.state.descricao,
            total: this.state.total,
        });
        
        api.post(`/pedido/5ccf0e0ab7c0ab3e049dda31/itens`, data);

        this.props.navigation.navigate('Insert');

        ToastAndroid.show('Item adicionado com sucesso!', ToastAndroid.SHORT);
        this.props.navigation.navigate('Itens');
    }

    calculaPreco = () => {
        this.setState({total: this.state.quantidade * this.state.preco});
    }

    render() {
        return ( 
                <View style={styles.container}>
                    
                    <TextInput style={styles.input}
                        placeholder="Digite um pizza"
                        placeholderTextColor="#999"
                        onChangeText={(descricao) => this.setState({descricao})}
                        value={this.state.descricao}
                        underlineColorAndroid="transparent"
                    />

                    <Picker style={styles.picker}
                        selectedValue={this.state.tamanho}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({tamanho: itemValue})
                        }>
                        <Picker.Item label="Broto" value="broto" />
                        <Picker.Item label="Média" value="media" />
                        <Picker.Item label="Grande" value="grande" />
                        <Picker.Item label="Família" value="familia" />
                    </Picker>

                    <TextInput style={styles.input}
                        placeholder="Quantidade"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        onChangeText={(quantidade) => this.setState({quantidade})}
                        value={this.state.quantidade}
                        onBlur={this.calculaPreco}
                        underlineColorAndroid="transparent"
                    />

                    <TextInput style={styles.input}
                        placeholder="Preço"
                        placeholderTextColor="#999"
                        keyboardType="decimal-pad"
                        onChangeText={(preco) => this.setState({preco})}
                        value={this.state.preco}
                        onBlur={this.calculaPreco}
                        underlineColorAndroid="transparent"
                    />

                    <View style={styles.containerTotal}> 
                        <Text style={styles.titleTotal}>Total: {this.state.total.toFixed(2)}</Text>
                    </View>

                    <TouchableOpacity style={styles.floatButton} onPress={this.backinItem}>
                        <Icon name='save' size={24} color="#FFF" />
                    </TouchableOpacity>
            </View>
        );
    }
}