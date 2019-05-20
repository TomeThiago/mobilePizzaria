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
        fontSize: 25,
        alignSelf: 'center',
        marginBottom: 15
    },

    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#DDD',
        color: '#FFF',
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
    },

    inputIconEye: {
        color: '#FFF',
        alignSelf: 'flex-end',
        marginRight: 8,
        top: -36,
    },

    footerContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    footerText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default styles;