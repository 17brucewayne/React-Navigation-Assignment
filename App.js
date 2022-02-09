import react from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,My } from 'react-native';
import Card from './Screens/card';
import MainModal from './Screens/modal';
import AcceptedModal from './Screens/Acceptedmodal';
import { useState } from 'react';


export default function App() {
   const [disable,setDisable]= useState(false)
   const[color,setColor]=useState("#FFFFFF")
   const [status,setStatus]= useState("Response Pending")
   const[modalVisi,setModalVisi] = useState(false)
   const[acceptVisi,setAcceptVisi] = useState(false)
   const[declined,setDeclined] = useState(false)
   const variable=()=>{
     setDisable(true)
     setDeclined(true)
     setStatus("Declined")
     setColor("#808080")
     console.log("working")
     setModalVisi(false)
   }
   
  
  return (
    <>
      <View style={styles.container}>
        <Card onPress={()=>setModalVisi(true)}
        status={status}
        color={color}
        disable={disable}/>
      </View>
      <MainModal visible={modalVisi} onPress={()=>{
        setModalVisi(false)
        setAcceptVisi(true)
      }}
      visibility={variable}
      />
      <AcceptedModal visible={acceptVisi} />
    </>  
    
    
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems: "center",
    
  }
 }
)
