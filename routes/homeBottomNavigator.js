import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens n header/homescreen';
import { Ionicons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

export default function Index(){
return (
    <Tab.Navigator>
    <Tab.Screen name="Left" component={Home}/>
    
   
    <Tab.Screen name="Add" component={Home} 
        options={{
            tabBarIcon: ({size, color}) => (<Ionicons name={"add-circle-outline"} color={color} size={size} />)
                }}/>
    
    <Tab.Screen name="Home" component={Home}/>
    </Tab.Navigator>
)
}

// Bottom tab navigator