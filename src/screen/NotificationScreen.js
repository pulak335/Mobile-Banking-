import { StyleSheet, Text, View, TouchableOpacity, FlatList,Image } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const todayData = [
    { id: 1, title: "Dadang Gantar requested a payment for $1200", date: '23 January 2021', imgUri: "https://www.w3schools.com/w3images/avatar2.png" },
    { id: 2, title: "You receive a payment from Asep ketan for $500", date: '20 January 2021',  imgUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuCwSGCSFDd2fiwEJIivTZMtyi_C-rJviL6eaNYj_D6JSCsqGeNKxGSikjn8QcPqPvWQ&usqp=CAU"},
    { id: 3, title: "Dadang Gantar requested a payment for $1200", date: '13 January 2022', imgUri: "https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png"},
]

const yesterdayData =[
    { id: 1, title: "Dadang Gantar requested a payment for $1200", date: '23 January 2021', imgUri: "https://www.w3schools.com/w3images/avatar2.png" },
    { id: 2, title: "You receive a payment from Asep ketan for $500", date: '20 January 2021',  imgUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuCwSGCSFDd2fiwEJIivTZMtyi_C-rJviL6eaNYj_D6JSCsqGeNKxGSikjn8QcPqPvWQ&usqp=CAU"},
    { id: 3, title: "Dadang Gantar requested a payment for $1200", date: '13 January 2022', imgUri: "https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png"},
]

// style={{}}

const Item = ({ title, imgUri, date }) => (
    <View style={{
      flex:1, 
      flexDirection:'row',
      alignItems:'center', 
      marginVertical:0, 
      borderBottomColor: "#979797",
      borderBottomWidth: 1}}>
      <Image 
      style={{ width: 56, height: 56, borderRadius: 8 }} 
      source={{ uri: imgUri }}/>
      <View style={{flex:1, marginStart:10}}>
        <Text style={{fontSize:20}}>{title}</Text>
        <Text style={{color:"#979797", marginBottom:10}}>{date}</Text>
      </View>
    </View>
);



const NotificationScreen = ({navigation}) => {
  const renderItem = ({ item }) => (
        <Item title={item.title} imgUri={item.imgUri} date={item.date} />
    );
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons style={styles.menuIcon} size={28} color="#979797" name="arrow-back-ios" />
          </TouchableOpacity>
          <View style={{flex:1,flexDirection:'row' ,justifyContent: 'center'}}>
          <Text style={{fontSize:22,fontWeight:'bold'}}>History Transaction</Text>
          </View>
        </View>
        <View style={{padding:5}}>
          <Text style={{ fontSize:16, fontWeight:"bold", color:"#979797"}}>Today</Text>
          <FlatList
                  data={todayData}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  pagingEnabled={true}
                  scrollEnabled
                  showsVerticalScrollIndicator={false}
                  bounces={false}
        />
        </View>
        <View style={{padding:5}}>
          <Text 
          style={{ fontSize:16, fontWeight:"bold", color:"#979797"}}>Yesterday</Text>
          <FlatList
                  data={yesterdayData}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  pagingEnabled={true}
                  scrollEnabled
                  showsVerticalScrollIndicator={false}
                  bounces={false}
        />
        </View>
    </SafeAreaView>
  )
}

export default NotificationScreen

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