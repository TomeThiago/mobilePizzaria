import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#424242',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 30
    },

    tituloTxt: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },

    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 4,
        fontSize: 16,
        paddingHorizontal: 20,
        marginTop: 15,
    },

    button: {
        height: 45,
        borderRadius: 4,
        fontSize: 16,
        paddingHorizontal: 20,
        marginTop: 15,
        backgroundColor: "#1e88e5",
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#FFF"
    }
});

export default styles;