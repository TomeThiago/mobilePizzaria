import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#424242',
        paddingHorizontal: 10,
        //paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0,
    },

    containerPedido: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    titlePedido: {
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold',
    },

    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 4,
        fontSize: 16,
        color: '#FFF',
        paddingHorizontal: 20,
        marginTop: 15,
    },

    containerTotal: {
        marginTop: 15,
        marginBottom: 15,
        height: 45,
        paddingHorizontal: 0,
    },

    titleTotal: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 28,
        paddingHorizontal: 5,
    },
    
    floatButton: {
        position: 'absolute',
        right: 30,
        //bottom: 30 + getBottomSpace(),
        bottom: 30,
        width: 60,
        height: 60,
        backgroundColor: '#1e88e5',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

});

export default styles;