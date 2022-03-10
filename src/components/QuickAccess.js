import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function QuickAccess() {
  return (
      <View View style={{ 
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between' ,
        margin:20,
        }}>
        <TouchableOpacity style={styles.iconBg}>
              <Ionicons style={styles.icon} name="add-outline" size={26} color="#fff" />
              <Text style={styles.textIcon}>Add Balance</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.iconBg}>
              <MaterialCommunityIcons style={styles.icon} name="arrow-up" size={26} color="#fff" />
              <Text style={styles.textIcon}>Transfer</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.iconBg}>
              <MaterialIcons style={styles.icon} name="payment" size={26} color="#fff" />
              <Text style={styles.textIcon}>Pay</Text>    
        </TouchableOpacity>
          <TouchableOpacity style={styles.iconBg}>
              <MaterialCommunityIcons style={styles.icon} name="qrcode-scan" size={26} color="#fff" />
              <Text style={styles.textIcon}>Pay with QR</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    iconBg:{
        backgroundColor: '#665BEC',
        width:70,
        height:70,
        borderRadius: 8,

    },
    icon:{
        padding:22
    },
    textIcon:{
        marginTop: 10,
        fontSize:12,
        fontWeight:'bold',
        color:'gray',
        textAlign:'center'
    }
})