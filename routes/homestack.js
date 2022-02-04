import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Home from '../screens n header/homescreen';
import Login from '../screens n header/loginscreen';
import Profile from '../screens n header/profilescreen';
import HomeBottomNavigator from "./homeBottomNavigator";
// import DrawerNavigator from './drawernavigator';
const Stack = createStackNavigator();

export default function Index(){
return (
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={HomeBottomNavigator} />
    <Stack.Screen name="Profile" component={Profile}  />
    <Stack.Screen name="Homescreen" component={Home}  />
    {/* <Stack.Screen name="Drawer" component={DrawerNavigator} /> */}
    </Stack.Navigator>
)
}

// Root navigation stack for screens