import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../Screen/HomeScreen';
import PaidScreen from '../Screen/PaidScreen';

const Tab = createMaterialBottomTabNavigator();

export default function MaterialNaviagtion() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#163E1A"
            barStyle={{ backgroundColor: '#48CBB3' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={'#8CD453'} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Paid"
                component={PaidScreen}
                options={{
                    tabBarLabel: 'Paid User',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={'#8CD453'} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="linechart" color={'#85DB5D'} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profit}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (

                        <MaterialCommunityIcons name="account" color={'#8CD453'} size={26} />
                    ),
                }}
            />


        </Tab.Navigator>
    );
}


function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Paid User
            </Text>
        </View>
    );
}

function Profit({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Profit
            </Text>
        </View>
    );
}
function Settings({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Profile
            </Text>
        </View>
    );
}