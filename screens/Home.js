/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { Box } from "native-base";
export default function Login() {
  return (
    <View style={styles.container}>
      <Box style={styles.textbox}>
        {/* <Icon name="search" 
        color="#00aced" /> */}
        <TextInput
          style={styles.input2}
          styles={{borderColor:'white'}}
          placeholder="Enter Date/Loaction"
        />
      </Box>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Text}>Add New Car</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    textbox: {
    marginTop: "-110%",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    height:'9%',
    borderRadius: 10,
  },
  input2:{
    marginTop:'0',
    height:'100%',
    width: "80%",
   
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 670,
    backgroundColor: "#ffffff",
    // width:'100vw',
  },
  btn: {
    backgroundColor: "green",
    height: 50,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "140%",
    position:'absolute',
    borderRadius: 12,
  },
  Text:{
    color: "#ffffff", 
    fontSize: 20 
  }
});
