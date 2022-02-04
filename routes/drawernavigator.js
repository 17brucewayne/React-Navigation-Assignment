import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens n header/homescreen';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator(){
    return (
    <NavigationContainer>
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Home}/>
    </Drawer.Navigator>
    </NavigationContainer>
    )}

