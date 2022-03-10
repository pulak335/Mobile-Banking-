import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const avatorData = [
    { id: 1, title: "Pulak", imgUri:"https://www.w3schools.com/w3images/avatar2.png"},
    { id: 2, title: "Jonas", imgUri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuCwSGCSFDd2fiwEJIivTZMtyi_C-rJviL6eaNYj_D6JSCsqGeNKxGSikjn8QcPqPvWQ&usqp=CAU"},
    { id: 3, title: "Killer", imgUri:"https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png"},
    { id: 4, title: "Miller", imgUri:"https://storage.jewheart.com/content/users/avatars/3746/avatar_3746_500.jpg?1558628223"},
    { id: 5, title: "Ohi ", imgUri:"https://www.w3schools.com/howto/img_avatar.png"},
    { id: 6, title: "Donas", imgUri:"https://yamsoti.com/wp-content/uploads/2020/01/avatar-rectangle.png"},
    { id: 7, title: "Ritik", imgUri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8LLCC0PkfzS__DVSg9gxjCPUZMPf1wfkXl7GPnUkdDVO0T3SDdpfS_6ZYgyBE5QbXx8&usqp=CAU"},
    { id: 8, title: "Rafi", imgUri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGrcXhKrH6PIFduTtaIp5sZe4ouX40NMI6El50QhOCNARIdbH31m5_6vkFmIoiljGKKU&usqp=CAU"},
]


const Item = ({ title, imgUri }) => (
    <TouchableOpacity style={styles.item}>
        <Image style={{width:50,height:50, borderRadius:8}} source={{ uri: imgUri}}/>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
);


const SendMoney = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} imgUri={item.imgUri}/>
    );
  return (
    <View>
          <View style={{
              flex: 1, 
              flexDirection: 'row',
              marginTop: 18,
              padding:2,
              justifyContent:'space-between',
              alignItems:'center'
              }}>
              <Text style={styles.textHead}>Send Money</Text>
              <TouchableOpacity style={{marginEnd:10}}><Text style={styles.buttonColor}>View All</Text></TouchableOpacity>
          </View>
          <View>
              <FlatList 
                data={avatorData} 
                renderItem={renderItem}
                keyExtractor={item => item.id} 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
          </View>
    </View>
  )
}

export default SendMoney;

const styles = StyleSheet.create({
    textHead:{
        fontSize: 20,
        fontWeight:'bold',
        marginStart:10
    },
    buttonColor:{
        color:"#665BEC",
        fontSize:18,
        fontWeight: 'bold'
    },
    imgview:{
        height:40,
        width:40,
        borderRadius:8
    },
    item: {
        padding: 2,
        marginVertical: 2,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginTop:8
    },
})