import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from './header';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();

export default function Home(props) {
    return(
      <View>
      <Header onPress={()=>props.navigation.push("Profile")}/>
      <View style={styles.container}>
      <Text>Home Screen</Text>
      </View>
      </View>
    )
}
const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop:50,
  }
})
  