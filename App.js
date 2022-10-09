import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import Signup from "./screens/Signup";
import AddVehicals from "./screens/AddVehicals";
import Login from "./screens/Login";
import Home from "./screens/Home";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <ToggleDarkMode /> */}
      {/* <Signup></Signup> */}
      {/* <Login></Login> */}
      <Home></Home>

      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddVehicals" component={AddVehicals} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Switch
        style={{}}
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
    </HStack>
  );
}
