import { StyleSheet,FlatList, Text,Image, View, Dimensions } from 'react-native'
import React from 'react'
const {width,height} = Dimensions.get("screen")

const avatorData = [
    { id: 1, title: "Pulak", date: '23 January 2021', ammount: '396.84', imgUri: "https://www.w3schools.com/w3images/avatar2.png", history:"Transfer" },
    { id: 2, title: "Jonas", date: '20 January 2021', ammount: '398.84', imgUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuCwSGCSFDd2fiwEJIivTZMtyi_C-rJviL6eaNYj_D6JSCsqGeNKxGSikjn8QcPqPvWQ&usqp=CAU", history: "Subscription" },
    { id: 3, title: "Killer", date: '13 January 2022', ammount: '296.84', imgUri: "https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png", history: "Transfer" },
    { id: 4, title: "Miller", date: '14 January 2021', ammount: '396.84', imgUri: "https://storage.jewheart.com/content/users/avatars/3746/avatar_3746_500.jpg?1558628223", history: "Transfer" },
    { id: 5, title: "Ohi ", date: '21 January 2022', ammount: '386.84', imgUri: "https://www.w3schools.com/howto/img_avatar.png", history: "Subscription" },
    { id: 6, title: "Donas", date: '22 January 2021', ammount: '316.84', imgUri: "https://yamsoti.com/wp-content/uploads/2020/01/avatar-rectangle.png", history: "Subscription" },
    { id: 7, title: "Ritik", date: '28 January 2021', ammount: '346.84', imgUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8LLCC0PkfzS__DVSg9gxjCPUZMPf1wfkXl7GPnUkdDVO0T3SDdpfS_6ZYgyBE5QbXx8&usqp=CAU", history: "Transfer" },
    { id: 8, title: "Rafi", date: '03 January 2022', ammount: '396.84', imgUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGrcXhKrH6PIFduTtaIp5sZe4ouX40NMI6El50QhOCNARIdbH31m5_6vkFmIoiljGKKU&usqp=CAU", history: "Subscription" },
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
                history === 'Transfer' ? (
                <Text style={{ color:"#4DCA52", fontSize:18, fontWeight:'bold'}}>+ ${ammount}</Text>
                ):(
                <Text style={{ color: "#FF5656", fontSize: 20, fontWeight: 'bold' }}>- ${ammount}</Text>
                )
            }
            <Text style={{ fontSize: 12, textAlign: 'right', color: 'gray' }}>{history }</Text>
        </View>
    </View>
);


const AllHistory = () => {
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

export default AllHistory;

const styles = StyleSheet.create({
    item:{
        height: 60,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})