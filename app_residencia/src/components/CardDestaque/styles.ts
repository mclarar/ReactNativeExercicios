import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: 5


    },

    card: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: 150,
        height: 220,
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: "column",

    },
    text: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100
    }
})