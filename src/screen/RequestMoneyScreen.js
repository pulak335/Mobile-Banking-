import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
const {width,height} = Dimensions.get("window")

const RequestMoneyScreen = () => {
  return (
    <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons style={styles.menuIcon} size={28} color="#979797" name="arrow-back-ios" />
          </TouchableOpacity>
          <View style={{flex:1,flexDirection:'row' ,justifyContent: 'center'}}>
          <Text style={{fontSize:22,fontWeight:'bold'}}>Request Money</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default RequestMoneyScreen

const styles = StyleSheet.create({
  menuIcon: {
    padding: 2
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    margin: 5
  },
})