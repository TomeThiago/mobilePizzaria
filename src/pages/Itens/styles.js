import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#424242',
        paddingHorizontal: 10,
        //paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0,
    },

    containerTitle: {
        height: 45,
        paddingHorizontal: 0,
        justifyContent: 'center',
        backgroundColor: '#212121',
    },

    titleTxt: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },

    list: {
        padding: 5,
        marginTop: 10
    },

    items: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15
    },

    itemDescricao: {
        fontSize: 14,
        color: '#FFF'
    },

    itemQuantidade: {
        fontSize: 14,
        color: '#FFF'
    },

    itemPreco: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF'
    },

    separator: {
        height: 1,
        backgroundColor: '#EEE'
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