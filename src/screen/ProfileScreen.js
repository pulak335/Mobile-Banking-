import { StyleSheet, Text, View, TouchableOpacity, Image, Switch  } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = ({navigation}) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons style={styles.menuIcon} size={28} color="#979797" name="arrow-back-ios" />
          </TouchableOpacity>
          <View style={{flex:1,flexDirection:'row' ,justifyContent: 'center'}}>
          <Text style={{fontSize:22,fontWeight:'bold'}}>Profile</Text>
          </View>
        </View>
        <View style={{padding:10}}>

        <View style={{ flexDirection:'row', alignItems:'center'}}>
          <Image 
          style={{width:88, height:88, borderRadius:12}} 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9eXXMGylQnu98CoXT-qi22ravnawQlv2Q-MCsOrk3jxUB-Z0D_mFYA8BbyUGZIkmotUo&usqp=CAU' }}/>
          <View style={{flex:1, marginStart:10}}>
            <Text style={{fontSize:24, fontWeight:'bold'}}>Cameron Williamson</Text>
            <Text style={{fontSize:14, fontWeight:'bold', color:'gray'}}>$joneswilliam</Text>
          </View>
        </View>

        <View style={{marginTop:25}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:6}}>
            <Text style={{fontSize:22}}>Account Number</Text>
            <Text style={{fontSize:16, color:'gray'}}>3024982387</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:6}}>
            <Text style={{fontSize:22}}>User Name</Text>
            <Text style={{fontSize:16, color:'gray'}}>SteveJobs</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:6}}>
            <Text style={{fontSize:22}}>Email</Text>
            <Text style={{fontSize:16, color:'gray'}}>info@opedia.com</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:6}}>
            <Text style={{fontSize:22}}>Mobile</Text>
            <Text style={{fontSize:16, color:'gray'}}>+880-126-654664</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:6}}>
            <Text style={{fontSize:22}}>Address</Text>
            <Text style={{fontSize:16, color:'gray'}}>Gotham Road 21...</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:6}}>
            <Text style={{fontSize:22}}>Change Pin</Text>
            <TouchableOpacity><AntDesign name="right" size={30} color="gray" style={{fontWeight:'bold'}} /></TouchableOpacity>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:6}}>
            <Text style={{fontSize:22}}>Change Password</Text>
            <TouchableOpacity><AntDesign name="right" size={30} color="gray" style={{fontWeight:'bold'}} /></TouchableOpacity>
          </View>


          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', marginBottom:6}}>
            <Text style={{fontSize:22}}>Finger Print</Text>
                  <Switch
                    trackColor={{ false: "#767577", true: "#665BEC" }}
                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
          </View>


          <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:6}}>
            <Text style={{fontSize:22}}>Language</Text>
            <TouchableOpacity><AntDesign name="right" size={30} color="gray" style={{fontWeight:'bold'}} /></TouchableOpacity>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:6}}>
            <Text style={{fontSize:22}}>Notification Settings</Text>
            <TouchableOpacity><AntDesign name="right" size={30} color="gray" style={{fontWeight:'bold'}} /></TouchableOpacity>
          </View>
        </View>
        </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

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