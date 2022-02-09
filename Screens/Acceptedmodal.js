import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {MaterialIcons} from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function AcceptedModal({ visible }) {
  return (
    <Modal visible={visible} animationType="slide">
      <View
        style={{
          borderRadius: 30,
          marginTop: 350,
          borderColor: "#FAF9F6",
          elevation:8,
          borderWidth: 8,
          hasBackdrop:true,
          backdropOpacity:0.2,
          backdropColor:"black",
        }}
      >
        <View style={styles.header}>
          <View style={styles.mainName}>
            <View style={styles.avatar}>
              <Text style={styles.alphabet}>A</Text>
            </View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>John Doe</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ top: 5, flexDirection: "row" }}>
                <AntDesign name="star" size={10} color="yellow" />
                <AntDesign name="star" size={10} color="yellow" />
                <AntDesign name="star" size={10} color="yellow" />
                <AntDesign name="star" size={10} color="yellow" />
                <AntDesign name="star" size={10} color="yellow" />
              </View>
              <Text>(21)</Text>
            </View>
            <Text style={{ color: "grey", fontSize: 10 }}>
              Driver since May 7th 2018
            </Text>
          </View>
          <View style={styles.driver}>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="seatbelt" size={23} color="black" />
              <Text>HR05AF0100</Text>
            </View>
            <Text style={{ fontSize: 10, color: "grey" }}>
              White Hyundai i10
            </Text>
          </View>
        </View>
        <View style={styles.body}>
           <View style={styles.gps}>
                <View style={styles.time}>
                   <Text style={{fontSize:14}}>21st Oct</Text>
                   <Text style={{fontSize:14}}>5:00 PM</Text>
                </View>
                <View style={styles.location}>
                  <View style={styles.origin}>  
                    <View style={{flexDirection:"row",bottom:18,right:18}}>
                      <Entypo name="dot-single" size={35} color="green" />
                      <Text style={{fontSize:16}} numberOfLines={2}>Huda Metro Station, Sector 29</Text>
                    </View>
                    <View style={{bottom:30,left:10}}>
                    <Text style={{fontSize:14,color:"#005A9C"}}>
                      1.5 km away from origin
                    </Text>
                    </View>
                  </View>
                  <View style={styles.midway}>
                    <View style={{flexDirection:"row",right:18,top:5}}>
                      <Entypo name="dot-single" size={35} color="#F6BE00" />
                      <Text style={{fontSize:16}} numberOfLines={2}>Princeton Floors,Sector 51, Gurgaon</Text>
                    </View>
                  </View>
                  <View style={styles.destination}>
                    <View style={{flexDirection:"row",right:18,top:30}}>
                       <Entypo name="dot-single" size={35} color="red" />
                       <Text style={{fontSize:16}} numberOfLines={2}>Sector 52, Gurgaon</Text>
                    </View>
                    <View style={{top:14,left:10}}>
                    <Text style={{fontSize:14,color:"#005A9C"}}>
                      1.5 km away from destination
                    </Text>
                    </View>
                  </View>
                </View>
           </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",height:50}}>
            <Text style={{fontSize:22,fontWeight:"600"}}>Comment: </Text>
            <Text style={{fontSize:18}}>"I will meet you near parking"</Text>
        </View>
        <View style={{flexDirection:"row",marginTop:12,justifyContent:"space-evenly"}}>
           <View style={styles.icons}><Feather name="phone-call" size={22} color="white" /></View>
           <View style={styles.icons}><SimpleLineIcons name="envelope" size={22} color="white" /></View>
           <View style={styles.icons}><MaterialIcons name="message" size={22} color="white" /></View>
        </View>
        <View style={{backgroundColor:"#ededed",flexDirection:"row",justifyContent:"center",alignItems:"center",height:40,marginTop:25}}> 
            <Text style={{fontSize:"18"}}>The driver is not willing to get paid for the ride.</Text>
        </View>
      
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    height: 140,
    top: 0,
  },
  avatar: {
    width: 70,
    height: 70,
    borderColor: "#87CEEB",
    borderRadius: 40,
    borderWidth: 2,
    backgroundColor: "#1e90ff",
    justifyContent: "center",
    alignItems: "center",
  },
  alphabet: {
    color: "white",
    fontSize: 30,
  },
  mainName: {
    left: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  driver: {
    top: 10,
    left: 135,
  },
  body:{
    top:20,  
    
    height:250,
  },
  gps: {
    flexDirection: "row",
  },
  time: {
    left:15,
    top:10
  },
  location: {
    height: 150,
    left: 50,
    top: 20,
    borderLeftWidth: 4,
    borderRadius: 1,
    borderStyle: "dotted",
  },
  origin:{
      marginVertical:2
  },
  midway:{
      marginVertical:2
  },
  destination:{
      marginVertical:2
  },
  button:{
    height:35,  
    width:100,
    borderRadius:30,
    backgroundColor:"#005A9C",
    justifyContent:"center",
    alignItems:"center"
  },
  icons:{
    width:50,
    height:50,
    borderRadius:28,
    backgroundColor:"#005A9C",
    justifyContent:"center",
    alignItems:"center"
  }
 
});
