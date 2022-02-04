import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import validator from "validator";


export default function Login(props) {


  // Email ID and password validation

  const [emailInput,setEmailInput] = useState('');
  const [email,setEmail]= useState('')

  const validateEmail=(value)=>{
     setEmail(value);
    if (validator.isEmail(email)) {
      setEmailInput('Valid')
    } else {
      setEmailInput('Invalid')
    }
  }

  const [passInput, setPassInput] = useState('')
  const [password, setPassword] = useState('')

  const validatePassword = (value) => {
        setPassword(value);
        if (validator.isStrongPassword(password, {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
          setPassInput('Strong')
        } else {
          setPassInput('Weak')
        }
    } 
    const submit=()=>{
        if(emailInput==="Valid" && passInput==="Strong"){
          props.navigation.push("Home");
        }
        else{
            console.log("error");
        }
    }    
  

    return(
      <View style={styles.container}>
      <Text>Enter Email:{emailInput}</Text>
      <TextInput 
        placeholder='abc@example.com' 
        style={styles.input}
        onChangeText={(value) => validateEmail(value)} />

      <Text>Enter Password:{passInput}</Text>
      <TextInput 
        placeholder='password' 
        style={styles.input}
        onChangeText={(value) => validatePassword(value)} />

      <Text><Button title="Log In" onPress={submit}></Button></Text>
    </View>
    
    );

}
   const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
})


