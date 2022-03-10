import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Transaction from '../components/Transaction';
const {width,height} = Dimensions.get("window")


const MyCardScreen = ({navigation}) => {
  return (
    <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons style={styles.menuIcon} size={28} color="#979797" name="arrow-back-ios" />
          </TouchableOpacity>
          <View style={{flex:1,flexDirection:'row' ,justifyContent: 'center'}}>
          <Text style={{fontSize:22,fontWeight:'bold'}}>My Card</Text>
          </View>
        </View>
          <View  style={{ 
              flexDirection:'row', 
              alignItems:'center',
              padding:15,
              justifyContent:'center' }}>  
            <Image 
            source={require('../../assets/cards/Card1.png')}
            style={{
              width:343, 
              height: 199,
            }}
            />
          </View>
          <View style={{ flexDirection:'row', alignItems:'center',
              padding:15,
        justifyContent: 'center'
      }}>
        <View style={{width: width-20,height:175, padding:15, borderWidth:1, borderColor:'gray', borderRadius:8,}}>
          <Text>Set Card Limit</Text>
          <View style={{flexDirection:'row'}}>
            <View>
              <Text style={{color:'gray', fontSize:14,LineHeight:21}}>Limit Transaction</Text>
              <Text style={{fontSize:18}}>$1,000</Text>
            </View>
            <View>
              <Text style={{color:'gray', fontSize:14,LineHeight:21}}>Total Spend this Month</Text>
              <Text style={{fontSize:18}}>$325</Text>
            </View>
            <View>
              
            </View>
          </View>
        </View>
          </View>
            <Transaction/>
    </SafeAreaView>
  )
}

export default MyCardScreen

const styles = StyleSheet.create({
  menuIcon: {
    padding: 2
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    margin: 5
  }
})