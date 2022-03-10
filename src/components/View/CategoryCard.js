import {
    View,
    Text,
    StyleSheet,
    ImageBackground
} from "react-native";
import React from 'react';

export default function CategoryCard(props) {
  return (

            <ImageBackground resizeMode="cover" style={styles.image} source={props.imageUri}>
                <View style={styles.cardDetails}>
                    <Text style={{color:"#fff", marginBottom:15}}>Visa</Text>
                    <Text style={styles.textB}>Your Balance</Text>
                    <Text style={styles.dollorS}>$ {props.dollor}</Text>
                    <Text style={styles.textB}>{props.name}</Text>
                    <Text style={styles.cardNumber}>{props.cardnum}</Text>
                    <Text style={styles.textB}>Expired Date</Text>
                    <Text style={styles.cardNumber}>{props.ep}</Text>
                </View>
            </ImageBackground>
  )
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center' //styleName: Caption 1/Semibold;
    // },
    image:{
        height:220,
        width:170,
        borderRadius:12,
        marginHorizontal:3
    },
    textB:{
        opacity: 0.7,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    dollorS:{
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 28,
        color: "#fff",
        marginBottom: 15
    },
    cardNumber:{
        fontSize: 12,
        fontStyle: 'normal',
        lineHeight: 16,
        color: "#fff",
        marginBottom: 15

    },
    cardDetails:{
        padding:16,
        marginVertical:5
    }
});