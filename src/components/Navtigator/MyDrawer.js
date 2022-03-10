import { createDrawerNavigator } from '@react-navigation/drawer';
import ATMCenterScreen from '../../screen/ATMCenterScreen';
import BalanceScreen from '../../screen/BalanceScreen';
import BillScreen from '../../screen/BillScreen';
import EwalletScreen from '../../screen/EwalletScreen';
import Home from '../../screen/Home';
import MyCardScreen from '../../screen/MyCardScreen';
import RequestMoneyScreen from '../../screen/RequestMoneyScreen';
import SavingsScreen from '../../screen/SavingsScreen';
import SendMoneyScreen from '../../screen/SendMoneyScreen';
import StatisticScreen from '../../screen/StatisticScreen';
import HistoryTransScreen from '../../screen/TabScreen/HistoryTransScreen';
import CustomDrawer from './CustomDrawer';
import { Dimensions } from 'react-native';
import NotificationScreen from '../../screen/NotificationScreen';
import ProfileScreen from '../../screen/ProfileScreen';
const Drawer = createDrawerNavigator();

const {width , height} = Dimensions.get("window")
function MyDrawer() {
    return (
            <Drawer.Navigator 
                screenOptions={{
                headerShown:false,
                drawerStyle: {
                width: width-150,
                height: height-100,
                marginVertical:100,
                borderRadius:8,
                },
            }}
                initialRouteName="Home"
                drawerContent={(props) => <CustomDrawer {...props} />}
                >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Balance" component={BalanceScreen} />
                <Drawer.Screen name="EwalletScreen" component={EwalletScreen} />
                <Drawer.Screen name="BillScreen" component={BillScreen} />
                <Drawer.Screen name="SavingsScreen" component={SavingsScreen} />
                <Drawer.Screen name="StatisticScreen" component={StatisticScreen} />
                <Drawer.Screen name="MyCardScreen" component={MyCardScreen} />
                <Drawer.Screen name="SendMoneyScreen" component={SendMoneyScreen} />
                <Drawer.Screen name="RequestMoneyScreen" component={RequestMoneyScreen} />
                <Drawer.Screen name="ATMCenterScreen" component={ATMCenterScreen} />
                <Drawer.Screen name="HistoryTransScreen" component={HistoryTransScreen} />
                <Drawer.Screen name="Notification" component={NotificationScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
            </Drawer.Navigator>
    );
}
export default MyDrawer;