import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../page/Home/Home";
import Usuario from "../page/Usuario/Usuario";
import Configuraciones from "../page/Configuraciones/Configuraciones";

export default function NavBar() {
  const drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <drawer.Navigator initialRouteName="Home">
        <drawer.Screen name="Home" component={Home} />
        <drawer.Screen name="Usuario" component={Usuario} />
        <drawer.Screen name="Configuraciones" component={Configuraciones} />
      </drawer.Navigator>
    </NavigationContainer>
  );
}
