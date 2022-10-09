/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import {
  View,
  Alert,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import UserService from "../service/signup";

import React, { useState } from "react";
export default function Signup({ navigation }) {
  // const [userObj, setUserObj] = useState({
  //   Username: '',
  //   Password: '',
  //   Email: '',
  //   Address: '',
  // });

  const [Username, setUsername] =new useState("");
  const [Password, setPassword] =new useState("");
  const [Email, setEmail] = new useState("");
  const [Address, setAddress] = new useState("");

  const submit = async (e) => {
    const object = {
      'Username':Username,
     'Password':Password,
     'Email':Email,
      'Address':Address
    };
    let res = await UserService.postUser(object);
    console.log("data" + object.Address);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "black", fontSize: 50, marginTop: "-44%" }}>
        {" "}
        Sign up
      </Text>
      <TextInput
        value={Username}
        onChange={e => setUsername(e.target.value)}
        placeholderTextColor="black"
        style={styles.input1}
        placeholder="Username"
      />
      <TextInput
       
        value={Password}
        onChange={e => setPassword(e.target.value)}
        placeholderTextColor="black"
        style={styles.input2}
        placeholder="Password"
      />
      <TextInput
     
        value={Email}
        onChange={e => setEmail(e.target.value)}
        placeholderTextColor="black"
        style={styles.input3}
        placeholder="Email"
      />
      <TextInput
        value={Address}
        onChange={e => setAddress(e.target.value)}
        placeholderTextColor="black"
        style={styles.input4}
        placeholder="Address"
      />

      <Button onPress={submit} style={styles.btn}>
        <Text
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={{ color: "#fffff", fontSize: 20 }}
        >
          Sign Up
        </Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 900,
    backgroundColor: "#ffffff",
  },
  input1: {
    marginTop: "25%",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    color: "#000000",

    borderRadius: 10,
  },
  input2: {
    marginTop: "5%",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    borderRadius: 10,
  },
  input3: {
    marginTop: "5%",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    borderRadius: 10,
  },
  input4: {
    marginTop: "5%",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    borderRadius: 10,
  },
  btn: {
    width: "80%",
    padding: 5,
    backgroundColor: "green",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    borderRadius: 100,
  },
});
