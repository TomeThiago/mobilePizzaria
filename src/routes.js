import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';
import Pedido from './pages/Pedido';
import Itens from './pages/Itens';
import Insert from './pages/Insert';
import Info from './pages/Info';

const Routes = createAppContainer(
    createSwitchNavigator({
        Insert,
        Itens,
        Login,
        Main,
        Pedido, 
        Info
    })
);

export default Routes;