import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useContextUsuario } from "../Context/ContextProvider";

export default function ListaUsuario() {
  const { listaUsuario } = useContextUsuario();
  return (
    <FlatList
      data={listaUsuario}
      //para mostrar el formalario
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={stryles.useItem}>
          <Text>{item.nombre}</Text>
          <Text>{item.apellido}</Text>
          <Text>{item.correo}</Text>
          <Text>{item.telefono}</Text>
          <Text>{item.fechaNacimiento}</Text>
        </View>
      )}
    ></FlatList>
  );
}
const stryles = StyleSheet.create({
  lisTile: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 20,
  },
  useItem: {
    borderColor: "reed",
    borderWidth: 2,
    padding: 10,
    marginVertical: 5,
  },
});
