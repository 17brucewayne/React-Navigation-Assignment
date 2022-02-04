import React from 'react';
import { View,StyleSheet, Button } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.header}>
    <View style={styles.title}>
    <Button title="Profile" onPress={props.onPress}></Button>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 38,
    backgroundColor: 'grey',
  },
  title: {
    flex:1,
    flexDirection:"row",
    marginTop:-20,
    justifyContent:"flex-end",
  },
});


// Failed method 1
// const Drawer = createDrawerNavigator();
// export function DrawerNavigator(){
//     return (
//     <NavigationContainer>
//     <Drawer.Navigator>
//     <Drawer.Screen name="Home" component={Home}/>
//     </Drawer.Navigator>
//     </NavigationContainer>
//     )}




// Failed method 2
// import React from 'react';
// import { StyleSheet, Text, View} from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import Navigator from "../routes/drawernavigator"

// export default function Header({ title, navigation }) {

//   // const openMenu = () => {
//   //   navigation.openDrawer();
//   // }

//   return (
//     <View style={styles.header}>
//       <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
//       <View>
//         <Text style={styles.headerText}>{title}</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     width: '100%',
//     height: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerText: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: '#333',
//     letterSpacing: 1,
//   },
//   icon: {
//     position: 'absolute',
//     left: 16,
//   }
// });