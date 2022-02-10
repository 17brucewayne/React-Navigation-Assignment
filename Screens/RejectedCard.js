// Discarded component




// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button,TouchableOpacity,Modal} from 'react-native';
// import {Card} from "react-native-elements";
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// import MainModal from './modal';

// export default function RejectedCardBox({onPress}) {
  

//     console.log("rejected")

//   return (
     
//     <>   
//         <Card style={styles.card}>
//           <View style={styles.header}>
//              <View style={styles.avatar}>
//                 <Text style={styles.alphabet}>A</Text> 
//              </View>
//              <View style={styles.name}>
//                  <Text style={styles.customName}>Aditi</Text>
//                  <View style={styles.company}>
//                      <Text style={styles.companyName}>Infosys</Text>
//                      <MaterialCommunityIcons name="checkbox-marked-circle" size={8} color="green" style={styles.iconMark} />
//                  </View>
//              </View>
//              <View style={styles.status}>
//                  <Text style={styles.responseStatus}>Declined</Text>
//                  <View style={styles.rider}>
//                  <MaterialCommunityIcons name="seatbelt" size={18} color="black" />
//                  <Text style={{ fontSize:12,
//                                 fontWeight:"100"}}>
//                    Looking for a ride</Text>  
//                  </View>
//              </View>
//           </View>
//           <Card.Divider/>
//         <View style={styles.body}>
//             <View style={styles.gps}>
//                 <View style={styles.time}>
//                    <Text style={{fontSize:10}}>21st Oct</Text>
//                    <Text style={{fontSize:10}}>5:00 PM</Text>
//                 </View>
//                 <View style={styles.location}>
//                   <View style={styles.origin}>  
//                     <View style={{flexDirection:"row",right:15,bottom:23}}>
//                       <Entypo name="dot-single" size={28} color="green" />
//                       <Text style={{fontSize:14}} numberOfLines={2}>Huda Metro Station, Sector 29</Text>
//                     </View>
//                     <Text style={{fontSize:10,color:"#005A9C",left:15,bottom:28}}>
//                       1.5 km away from origin
//                     </Text>
//                   </View>
//                   <View style={styles.midway}>
//                     <View style={{flexDirection:"row",right:15,bottom:10}}>
//                       <Entypo name="dot-single" size={28} color="#F6BE00" />
//                       <Text style={{fontSize:14}} numberOfLines={2}>Princeton Floors,Sector 51, Gurgaon</Text>
//                     </View>
//                   </View>
//                   <View style={styles.destination}>
//                     <View style={{flexDirection:"row",right:15,top:9}}>
//                        <Entypo name="dot-single" size={28} color="red" />
//                        <Text style={{fontSize:14}} numberOfLines={2}>Sector 52, Gurgaon</Text>
//                     </View>
//                     <Text style={{fontSize:10,color:"#005A9C",left:15}}>
//                       1.5 km away from destination
//                     </Text>
//                   </View>
//                 </View>
//             </View>
           
//         </View>    
//         </Card>
        
          
//     </>
//   );
// }
// const styles=StyleSheet.create({
//     card:{
//       backgroundColor: "grey",
//       width: 350,
//       height: 350,
//       borderWidth:5,
//       borderRadius:10,
//     },
//     header:{
//       flexDirection:"row",
//       width:'100%',
//       height: 50,
//       justifyContent:"space-evenly",
//       top:0
//     },
//     avatar:{
//       width:40,
//       height:40,
//       borderColor:"#87CEEB",
//       borderRadius:25,
//       borderWidth:2,
//       backgroundColor:"#1e90ff",
//       justifyContent:"center",
//       alignItems:"center",
//       right:30
//     },
//     alphabet:{
//       color:"white",
//       fontSize:30
//     },
//     name:{
//         right:40,
//     },
//     customName:{
//       fontSize:15,
//       fontWeight:"bold",
//     },
//     company:{
//       flexDirection:"row"
//     },
//     iconMark:{
//       top:3,
//     },
//     companyName:{
//         fontSize:12,
//         fontWeight:"100"
//     },
//     status:{
//         left:25
//     },
//     responseStatus:{
//         color:"red",
//         fontSize:8,
//         marginLeft:40,
//         marginBottom:5
//     },
//     rider:{
//       flexDirection:'row'
//     },
//     gps:{
//         flexDirection:"row"
//     },
//     time:{
//         right:10,
//     },
//     location:{
//         height:150,
//         left:7,
//         top:5,
//         borderLeftWidth:2,
//         borderRadius:1,
//         borderStyle:"dotted",
//     },
//     origin:{
//         marginVertical:10
//     },
//     midway:{
//         marginVertical:10
//     },
//     destination:{
//         marginVertical:10
//     },
   
//    }
//   )