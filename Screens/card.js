import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Card} from "react-native-elements";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function CardBox({onPress,status,color,disable}) {
 
    const style=StyleSheet.create({
        card:{
              backgroundColor: color,
              width: 350,
              height: 300,
              borderRadius:10,
              elevation:6
            },
     })


  return (
    <> 
        <View style={style.card}>
          <View style={styles.header}>
             <View style={styles.avatar}>
                <Text style={styles.alphabet}>A</Text> 
             </View>
             <View style={styles.name}>
                 <Text style={styles.customName}>Aditi</Text>
                 <View style={styles.company}>
                     <Text style={styles.companyName}>Infosys</Text>
                     <MaterialCommunityIcons name="checkbox-marked-circle" size={8} color="green" style={styles.iconMark} />
                 </View>
             </View>
             <View style={styles.status}>
                 <Text style={styles.responseStatus}>{status}</Text>
                 <View style={styles.rider}>
                 <MaterialCommunityIcons name="seatbelt" size={18} color="black" />
                 <Text style={{ fontSize:12,
                                fontWeight:"100"}}>
                   Looking for a ride</Text>  
                 </View>
             </View>
          </View>
          <Card.Divider/>
        <View style={styles.body}>
            <View style={styles.gps}>
                <View style={styles.time}>
                   <Text style={{fontSize:10}}>21st Oct</Text>
                   <Text style={{fontSize:10}}>5:00 PM</Text>
                </View>
                <View style={styles.location}>
                  <View style={styles.origin}>  
                    <View style={{flexDirection:"row",right:15,bottom:23}}>
                      <Entypo name="dot-single" size={28} color="green" />
                      <Text style={{fontSize:14}} numberOfLines={2}>Huda Metro Station, Sector 29</Text>
                    </View>
                    <Text style={{fontSize:10,color:"#005A9C",left:15,bottom:28}}>
                      1.5 km away from origin
                    </Text>
                  </View>
                  <View style={styles.midway}>
                    <View style={{flexDirection:"row",right:15,bottom:10}}>
                      <Entypo name="dot-single" size={28} color="#F6BE00" />
                      <Text style={{fontSize:14}} numberOfLines={2}>Princeton Floors,Sector 51, Gurgaon</Text>
                    </View>
                  </View>
                  <View style={styles.destination}>
                    <View style={{flexDirection:"row",right:15,top:9}}>
                       <Entypo name="dot-single" size={28} color="red" />
                       <Text style={{fontSize:14}} numberOfLines={2}>Sector 52, Gurgaon</Text>
                    </View>
                    <Text style={{fontSize:10,color:"#005A9C",left:15}}>
                      1.5 km away from destination
                    </Text>
                  </View>
                </View>
            </View>
            {disable? <></>:<TouchableOpacity style={styles.button} onPress={onPress} disabled={disable}>
                <Text style={{color:'white'}}>Respond</Text>
            </TouchableOpacity>}
            
        </View>    
        </View>
        
          
    </>
  );
  
  
}
const styles=StyleSheet.create({
   
    header:{
      flexDirection:"row",
      width:'100%',
      height: 50,
      justifyContent:"space-evenly",
      top:0
    },
    avatar:{
      width:40,
      height:40,
      borderColor:"#87CEEB",
      borderRadius:25,
      borderWidth:2,
      backgroundColor:"#1e90ff",
      justifyContent:"center",
      alignItems:"center",
      top:5,
      right:25
    },
    alphabet:{
      color:"white",
      fontSize:30,
      bottom:5
    },
    name:{
        right:40,
        top:5
    },
    customName:{
      fontSize:15,
      fontWeight:"bold",
    },
    company:{
      flexDirection:"row"
    },
    iconMark:{
      top:3,
    },
    companyName:{
        fontSize:12,
        fontWeight:"100"
    },
    status:{
        top:5,
        left:25
    },
    responseStatus:{
        color:"red",
        fontSize:8,
        marginLeft:40,
        marginBottom:5
    },
    rider:{
      flexDirection:'row'
    },
    gps:{
        flexDirection:"row",
        left:30
    },
    time:{
        right:10,
    },
    location:{
        height:150,
        left:7,
        top:15,
        borderLeftWidth:1,
        borderRadius:1,
        borderStyle:"dotted",
    },
    origin:{
        marginVertical:10
    },
    midway:{
        marginVertical:10
    },
    destination:{
        marginVertical:10
    },
    button:{
        width:100,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#005A9C",
        borderRadius:25,
        height:40,
        left:120,
        top:65

    }
   }
  )