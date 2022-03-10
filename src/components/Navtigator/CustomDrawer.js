import {
    DrawerContentScrollView,
    DrawerItem,
    // DrawerItemList,
} from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, View, Text, TouchableOpacity } from 'react-native';

function CustomDrawer(props) {
    const { navigation } = props;
    return (
        <>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={{ 
                flexDirection:'row',
                alignItems:'center',
                marginStart:10,
                marginVertical:16
                }}>
                <Image 
                source={{uri:'https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg'}} 
                style = {{ width: 60, height: 60, margin:5, borderRadius:8}}/>
                <View style={{marginStart:20}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Cameron{"\n"}Williamson</Text>
                    <Text style={{color:'#C5C5C7',fontSize:12}}>$ Williamson</Text>
                </View>
            </TouchableOpacity>
        <DrawerContentScrollView {...props}
        style={{marginTop:-16}}
        >
            {/* <DrawerItemList {...props} /> */}
            <DrawerItem
                label="Home"
                icon={()=><AntDesign name="home" size={28} color="#665BEC" />}
                onPress={()=>navigation.navigate("Home")}
            />
            <DrawerItem
                label="Balance" 
                icon={()=><FontAwesome5 name="file-invoice-dollar" size={28} color="#665BEC" />}
                onPress={()=>navigation.navigate("Balance")}
            />
            <DrawerItem
                label="E-Wallet"
                icon={()=><Ionicons name="wallet-outline" size={28} color="#665BEC" />}
                onPress={()=>navigation.navigate("EwalletScreen")}
            />
            <DrawerItem
                label="Bill Payments"
                icon={()=><Ionicons name="cart-outline" size={28} color="#665BEC" />}
                onPress={()=>navigation.navigate("BillScreen")}
            />
            <DrawerItem
                label="Savings"
                icon={()=><Ionicons name="file-tray-stacked-outline" size={28} color="#665BEC" />}
                onPress={()=>navigation.navigate("SavingsScreen")}
            />
            <DrawerItem
                label="Statistic"
                icon={()=><Octicons name="graph" size={28} color="#665BEC" />}
                onPress={()=>navigation.navigate("StatisticScreen")}
            />
            <DrawerItem
                label="My Card"
                icon={()=><Entypo name="credit-card" size={28} color="#665BEC" />}
                onPress={()=>navigation.navigate("MyCardScreen")}
            />
            <DrawerItem
                label="Send Money"
                icon={()=><MaterialIcons name="send-to-mobile" size={28} color="#665BEC" />}
                onPress={()=>navigation.navigate("SendMoneyScreen")}
            />
            <DrawerItem
                label="Request Money"
                icon={()=><AntDesign name="download" size={28} color="#665BEC" />}
                onPress={()=>navigation.navigate("RequestMoneyScreen")}
            />
            <DrawerItem
                label="ATM Center"
                icon={()=><MaterialIcons name="pin-drop" size={28} color="#665BEC" />}
                onPress={()=>navigation.navigate("ATMCenterScreen")}
            />
            <DrawerItem
                label="Logout"
                icon={()=><AntDesign name="poweroff" size={28} color="#665BEC" />}
                onPress={()=>navigation.navigate("ATMCenterScreen")}
            />
            
        </DrawerContentScrollView>
        </>
    );
}

export default CustomDrawer;