import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        //paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0,
    },

    titleTxt: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },

    list: {
        marginTop: 30
    },

    pedido: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20
    },

    separator: {
        height: 1,
        backgroundColor: '#EEE'
    },

    pedidoInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    pedidoTitle: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10
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
    }
});

export default styles;