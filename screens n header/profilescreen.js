import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function Profile() {
  return(
    <View>
     
    <View style={styles.container}>
        <Text>Profile Screen</Text>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:50,
    }
})