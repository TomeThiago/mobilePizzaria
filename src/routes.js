import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';
import Itens from './pages/Itens';
import Insert from './pages/Insert';
import Info from './pages/Info';

const Routes = createAppContainer(
    createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: () => ({
                headerStyle: {
                    align: 'center',
                    backgroundColor: '#424242',
                },    
            }),
        },

       Main: {
            screen: Main,
            navigationOptions: () => ({
                title: 'Pedidos',
                headerStyle: {
                    align: 'center',
                    backgroundColor: '#212121',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },    
            }),
        },

        Itens: {
            screen: Itens,
            navigationOptions: () => ({
                title: 'Itens',
                headerStyle: {
                    align: 'center',
                    backgroundColor: '#212121',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }),
        },

        Insert: {
            screen: Insert,
            navigationOptions: () => ({
                title: 'Insira os Dados',
                headerStyle: {
                    backgroundColor: '#212121',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },    
            }),
        },
        
        Info: {
            screen: Info,
            navigationOptions: () => ({
                title: 'Informações Gerais',
                headerStyle: {
                    align: 'center',
                    backgroundColor: '#212121',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    alignItems: 'center',
                    fontWeight: 'bold',
                },    
            }),
        },
    }),  
);

export default Routes;