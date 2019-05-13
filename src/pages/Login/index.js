import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './styles';

export default class Login extends Component {
    state = {
        user: '',
        pass: '',
        showPass: true,
        press: false
    }

    handleSignIn = () => {
        this.props.navigation.navigate('Main');
    }

    showPass = () => {
        if (this.state.press == false){
            this.setState({ showPass: false, press: true});
        }else {
            this.setState({ showPass: true, press: false})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tituloTxt}>Delivery Now</Text>
                <TextInput style={styles.input}
                    placeholder="Digite seu usuário ou email"
                    placeholderTextColor="#999"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize='none'
                    autoCorrect={false}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={(user) => this.setState({user})}
                    underlineColorAndroid="transparent"
                />

                <TextInput style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#999"
                    returnKeyType="go"
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={this.state.showPass}
                    ref={(input) => this.passwordInput = input}
                    onChangeText={(pass) => this.setState({pass})}
                    underlineColorAndroid="transparent">
                </TextInput>

                <TouchableOpacity style={styles.inputIconEye}
                    onPress={this.showPass}>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={this.handleSignIn} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}