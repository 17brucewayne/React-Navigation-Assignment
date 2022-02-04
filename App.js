// App.js
import React from 'react';

import Navigator from "./routes/homestack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, } from '@react-navigation/native';


export default function App() {
  return(
 <SafeAreaProvider>
   <NavigationContainer>
     <Navigator />
   </NavigationContainer>
 </SafeAreaProvider>

  )
}

