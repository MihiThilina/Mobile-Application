/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import {  Box } from "native-base";
import {launchImageLibrary} from 'react-native-image-picker';

import React , { useState } from "react";

export default function AddVehicals() {

  const [carOb , setCarOb] =new useState(
    {
      image:'',
      Reg_Number:'',
      Brand:'',
      Price:'',
      Fuel_Type:'',
      Date:'',
      Location:''
    }
  );
  



  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Add Vehicals</Text>
       
      <TextInput
        placeholderTextColor="black"
        style={styles.image}
        editable={false}
        value={carOb.image}
      />
      <Box>
      <TouchableOpacity onPress={async e => {
                const result = await launchImageLibrary({
                  mediaType: 'photo',
                  selectionLimit: 13,
                });
                let images = result.assets;
                images.forEach(e => {
                  let uri = e.uri;
                  console.log(uri);
                  setCarOb(prevState => {
                    return {
                      ...carOb,
                      image: uri,
                    };
                  });
                });
              }} style={styles.upload}>


          <Text style={{ color: "#ffffff", fontSize: 18 }}> Upload !</Text>
        </TouchableOpacity>
      </Box>
      <TextInput
        onChangeText={e => {
          setCarOb(prevState => {
            return {
              ...carOb,
              Reg_Number: e,
            };
          });
        }}
        value={carOb.Reg_Number}
        placeholderTextColor="black"
        style={styles.inputall}
        placeholder="Reg Number"
      />
      <TextInput
            onChangeText={e => {
              setCarOb(prevState => {
                return {
                  ...carOb,
                  Brand: e,
                };
              });
            }}
            value={carOb.Brand}
        placeholderTextColor="black"
        style={styles.input}
        placeholder="Brand"
      />
      <TextInput
          onChangeText={e => {
            setCarOb(prevState => {
              return {
                ...carOb,
                Price: e,
              };
            });
          }}
          value={carOb.Price}
        placeholderTextColor="black"
        style={styles.input}
        placeholder="Price"
      />
      <TextInput
          onChangeText={e => {
            setCarOb(prevState => {
              return {
                ...carOb,
                Fuel_Type: e,
              };
            });
          }}
          value={carOb.Fuel_Type}
        placeholderTextColor="black"
        style={styles.input2all}
        placeholder="Fuel Type"
      />
      <TextInput
           onChangeText={e => {
            setCarOb(prevState => {
              return {
                ...carOb,
                Date: e,
              };
            });
          }}
          value={carOb.Date}
        placeholderTextColor="black"
        style={styles.input2}
        placeholder="Date"
      />
      <TextInput
          onChangeText={e => {
            setCarOb(prevState => {
              return {
                ...carOb,
                Location: e,
              };
            });
          }}
          value={carOb.Location}
        placeholderTextColor="black"
        style={styles.input2}
        placeholder="Location"
      />
      <TouchableOpacity style={styles.btn}
          onPress={async e => {
            console.log(carOb);
            const res = await fetch('http://localhost:4000/vehicels', {
              method: 'POST',
              body: JSON.stringify(carOb),
              headers: {
                'Content-Type': 'application/json;charset=UTF-8',
              },
            })
              .then(res => {
                console.log(res);
                Alert.alert('Car Saved Successfully');
              })
              .catch(res => {
                console.log(res);
                Alert.alert('Car Saving is Unsuccessful');
              });
          }}
      >
        <Text style={{ color: "#ffffff", fontSize: 20 }}> Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}
      onPress={async e => {
        carOb.Reg_Number != ''
          ? fetch(
              'http://localhost:4000/vehicels' + carOb.Reg_Number,
              {
                method: 'PUT',
                body: JSON.stringify(carOb),
                headers: {
                  'Content-Type': 'application/json;charset=UTF-8',
                },
              },
            )
              .then(res => {
                console.log(res);
                Alert.alert('Car Updated Successfully');
              })
              .catch(res => {
                console.log(res);
                Alert.alert('Car Updating is Unsuccessful');
              })
          : Alert.alert('Please Fill Relevant Fields');
      }}
      
      >
        <Text style={{ color: "#ffffff", fontSize: 20 }}> update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}
      onPress={async e => {
        carOb.Reg_Number != ''
          ? fetch(
              'http://localhost:4000/vehicels' + carOb.Reg_Number,
              {
                method: 'DELETE',
              },
            )
              .then(res => {
                console.log(res);
                Alert.alert('Car Deleted Successfully');
              })
              .catch(res => {
                console.log(res);

                Alert.alert('Car Deleting is Unsuccessful');
              })
          : Alert.alert('Please Fill Relevant Fields');
      }}
      >
        <Text style={{ color: "#ffffff", fontSize: 20 }}> delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 360,
    backgroundColor: "#ffffff",
    // width:'100vw',
  },
  topic: {
    color: "black",
    fontSize: 30,
    marginRight: "35%",
    marginTop: "90%",
  },
  upload:{
    position:'relative',
    marginTop:'1220%',
    backgroundColor:'#5c6fff',
    borderColor:'1 solid black',
    height: 50,
    width:110,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-100%",
    marginLeft: "100%",
    borderRadius: 12,
  },
  inputall: {
    marginTop: "16%",
    borderWidth: 1,
    marginRight: "48%",
    padding: 10,
    width: "48%",
    borderRadius: 10,
  },
  input: {
    marginTop: "4%",
    borderWidth: 1,
    marginRight: "48%",
    padding: 10,
    width: "48%",
    borderRadius: 10,
  },
  input2all: {
    marginTop: "-42%",
    borderWidth: 1,
    marginLeft: "53%",
    padding: 10,
    width: "44%",
    borderRadius: 10,
  },
  image:{
    marginTop: "-42%",
    borderWidth: 1,
    marginLeft: "53%",
    padding: 10,
    width: "44%",
    height: "44%",
    borderRadius: 10,
  },
  input2: {
    marginTop: "4%",
    borderWidth: 1,
    marginLeft: "53%",
    padding: 10,
    width: "44%",
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "green",
    height: 50,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    borderRadius: 12,
  },
});
