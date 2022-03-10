import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import AllHistory from './SubScreen/AllHistory';
import Income from './SubScreen/Income';
import Outcome from './SubScreen/Outcome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarIndicator } from 'react-native-tab-view';

const Tab = createMaterialTopTabNavigator();

const HistoryTransScreen = (props) => {
  const {navigation} = props;
  return (
    <>
        <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons style={styles.menuIcon} size={28} color="#979797" name="arrow-back-ios" />
        </TouchableOpacity>
        <View style={{flex:1,flexDirection:'row' ,justifyContent: 'center'}}>
        <Text style={{fontSize:22,fontWeight:'bold'}}>History Transaction</Text>
        </View>
      </SafeAreaView>
        <Tab.Navigator
        tabBarOptions={{
          activeTintColor:"#665BEC",
          inactiveTintColor:"gray",
          labelStyle:{
            fontSize:14,
            fontWeight:'bold'
          },
          indicatorStyle:{
            backgroundColor:"#665BEC",
            height:4
          }
        }}
        >
          <Tab.Screen name="All" component={AllHistory} />
          <Tab.Screen name="Income" component={Income} />
          <Tab.Screen name="Outcome" component={Outcome} />
        </Tab.Navigator>
    </>
  )
}

export default HistoryTransScreen;

const styles = StyleSheet.create({
  menuIcon: {
    padding: 2
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    marginBottom:5
  }
})

