/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { View, Text,TextInput,Button,StyleSheet, TouchableOpacity,} from 'react-native';
import React from 'react';


export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Add Vehicals</Text>

      
  
      <TextInput placeholderTextColor="black" style={styles.inputall}  placeholder="Reg Number" />
      <TextInput placeholderTextColor="black" style={styles.input} placeholder="Brand" />
      <TextInput placeholderTextColor="black" style={styles.input} placeholder="Price" />
      <TextInput placeholderTextColor="black" style={styles.input2all} placeholder="Fuel Type" />
      <TextInput placeholderTextColor="black" style={styles.input2} placeholder="Date" />
      <TextInput placeholderTextColor="black" style={styles.input2} placeholder="Location" />
      <TouchableOpacity style={styles.btn}>
        <Text style={{color: '#ffffff', fontSize: 20}}> Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height:360,
    backgroundColor:'#ffffff'
    // width:'100vw',
  },
  topic:{
    color: 'black', 
    fontSize: 30, 
    marginRight: '35%',
    marginTop:'60%'
  },
  inputall:{
    marginTop:'56%',
    borderWidth: 1,
    marginRight: '48%',
    padding: 10,
    width: '48%',
    borderRadius: 10,
  },
  input:{
    marginTop:'4%',
    borderWidth: 1,
    marginRight: '48%',
    padding: 10,
    width: '48%',
    borderRadius: 10,
  },
  input2all:{
    marginTop:'-42%',
    borderWidth: 1,
    marginLeft: '53%',
    padding: 10,
    width: '44%',
    borderRadius: 10,
  },
  input2:{
    marginTop:'4%',
    borderWidth: 1,
    marginLeft: '53%',
    padding: 10,
    width: '44%',
    borderRadius: 10,
  },
  btn:{
    backgroundColor: 'green',
    height: 50,
    width :300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    borderRadius:12,
  }
});