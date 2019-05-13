import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, ToastAndroid } from 'react-native';

import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Main extends Component {
    state = {
        descricao: '',
        quantidade: 1,
        preco: 0,
        total: 0
    }

    backinItem = () => {
        ToastAndroid.show('Item adicionado com sucesso!', ToastAndroid.SHORT);
        this.props.navigation.navigate('Itens');
    }

    calculaPreco = () => {
        this.setState({total: this.state.quantidade * this.state.preco});
    }

    render() {
        return ( 
            <View style={{flex: 1}}>
                <View style={styles.containerTitle}>
                    <Text style={styles.titleTxt}>Insira os Dados</Text>
                </View>
                <View style={styles.container}>
                    
                    <TextInput style={styles.input}
                        placeholder="Digite um item"
                        placeholderTextColor="#999"
                        onChangeText={(descricao) => this.setState({descricao})}
                        underlineColorAndroid="transparent"
                    />


                    <TextInput style={styles.input}
                        placeholder="Quantidade"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        onChangeText={(quantidade) => this.setState({quantidade})}
                        underlineColorAndroid="transparent"
                    />

                    <TextInput style={styles.input}
                        placeholder="Preço"
                        placeholderTextColor="#999"
                        keyboardType="decimal-pad"
                        onChangeText={(preco) => this.setState({preco})}
                        underlineColorAndroid="transparent"
                    />

                    <View style={styles.containerTotal}> 
                        <Text style={styles.titleTotal}>Total: {this.state.total.toFixed(2)}</Text>
                    </View>

                    <Button title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        onPress={this.calculaPreco}
                    />
                    <TouchableOpacity style={styles.floatButton} onPress={this.backinItem}>
                        <Icon name='save' size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>
                </View>
        );
    }
}