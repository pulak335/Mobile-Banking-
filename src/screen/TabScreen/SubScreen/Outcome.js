import { StyleSheet, Text, View,FlatList,Image, Dimensions } from 'react-native'
import React from 'react'
const {width,height} = Dimensions.get("screen")

const avatorData = [
    { id: 1, title: "Pulak", date: '23 January 2021', ammount: '396.84', imgUri: "https://www.w3schools.com/w3images/avatar2.png", history:"Subscription" },
    { id: 2, title: "Jonas", date: '20 January 2021', ammount: '398.84', imgUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuCwSGCSFDd2fiwEJIivTZMtyi_C-rJviL6eaNYj_D6JSCsqGeNKxGSikjn8QcPqPvWQ&usqp=CAU", history: "Subscription" },
    { id: 3, title: "Killer", date: '13 January 2022', ammount: '296.84', imgUri: "https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png", history: "Subscription" },
    { id: 4, title: "Miller", date: '14 January 2021', ammount: '396.84', imgUri: "https://storage.jewheart.com/content/users/avatars/3746/avatar_3746_500.jpg?1558628223", history: "Subscription" },
    { id: 5, title: "Ohi ", date: '21 January 2022', ammount: '386.84', imgUri: "https://www.w3schools.com/howto/img_avatar.png", history: "Subscription" }
]

const Item = ({ title, imgUri, date, ammount, history }) => (
    <View style={styles.item}>
        <View style={{flex:1,flexDirection:"row", alignItems:'center'}}>
            <Image style={{ marginEnd:10, width: 50, height: 50, borderRadius: 8 }} source={{ uri: imgUri }} />
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={{color:'gray'}}>{date}</Text>
            </View>
        </View>
        <View>
            {
                history === 'Transfer' ? (<Text style={{ color:"#4DCA52", fontSize:20, fontWeight:'bold'}}>+ ${ammount}</Text>):(
                    <Text style={{ color: "#FF5656", fontSize: 20, fontWeight: 'bold' }}>- ${ammount}</Text>
                )
            }
            <Text style={{ fontSize: 12, textAlign: 'right', color: 'gray' }}>{history }</Text>
        </View>
    </View>
);


const Outcome = () => {

      const renderItem = ({ item }) => (
        <Item title={item.title} imgUri={item.imgUri} date={item.date} ammount={item.ammount} history={item.history} />
    );

  return (
    <View style={{flex:1,margin:10, }}>
      <Text>January</Text>
      <FlatList
                  data={avatorData}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  pagingEnabled={true}
                  scrollEnabled
                  showsVerticalScrollIndicator={false}
                  bounces={false}
        />
    </View>
  )
}

export default Outcome

const styles = StyleSheet.create({
  item:{
        height: 60,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})