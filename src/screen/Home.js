import { View,Dimensions, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Balancecard from '../components/Balancecard';
import QuickAccess from '../components/QuickAccess';
import SendMoney from '../components/SendMoney';
import Transaction from '../components/Transaction';
import { SafeAreaView } from 'react-native-safe-area-context'


function Home(props) {
  const { navigation } = props;
  return (
    <SafeAreaView style={{flex:1,width:Dimensions.get('window').width, justifyContent:'center'}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <Entypo style={styles.menuIcon} size={28} color="#979797" name="list" />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("Notification")}>
          <Ionicons style={styles.menuIcon} name="notifications-outline" size={28} color="#979797" />
        </TouchableOpacity>
      </View>
      <ScrollView 
      vertical={true}
      style={{ flex:1 }}>
        <Balancecard />
        <QuickAccess />
        <SendMoney />
        <Transaction navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  menuIcon: {
    padding: 2
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export default Home;