import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
const {width,height} = Dimensions.get("window")

const SendMoneyScreen = ({ navigation }) => {
    const [number, onChangeNumber] = useState(null);
    const [ammount, onChangeAmmount] = useState(null);
    const [name, onChangeName] = useState('');


  return (
    <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons style={styles.menuIcon} size={28} color="#979797" name="arrow-back-ios" />
          </TouchableOpacity>
          <View style={{flex:1,flexDirection:'row' ,justifyContent: 'center'}}>
          <Text style={{fontSize:22,fontWeight:'bold'}}>Send Money</Text>
        </View>
      </View>
      
      <View style={{flex: 1, flexDirection:'column'}}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Account Number"
        keyboardType="numeric"
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Account Holder Name"
        keyboardType="default"
      />
        <TextInput
        style={styles.input}
        onChangeText={onChangeAmmount}
        value={ammount}
        placeholder="$ Ammount"
        keyboardType="numeric"
        />
          <Button style={{width:width-60, height: 45}}><Text style={{color:'#fff'}}>Send Monney</Text></Button>

      </View>
    </SafeAreaView>
  )
}

export default SendMoneyScreen

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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})