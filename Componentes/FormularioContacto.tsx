import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useContextUsuario } from "../Context/ContextProvider";
import { FlatList, TextInput } from "react-native-gesture-handler";
import ListaUsuario from "./ListaUsuario";

export default function FormularioContacto() {
  const {
    nombre,
    apellido,
    correo,
    telefono,
    fechaNacimiento,
    listaUsuario,
    agregarUsuario,
    setNombre,
    setApellido,
    setCorreo,
    setTelefono,
    setFechaNacimineto,
  } = useContextUsuario();
  return (
    <View>
      <Text>Formulario de Usuario</Text>
      <TextInput
        style={stryles.input} //estilos
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}//para guardar lo que se registra
      />

      <TextInput
        style={stryles.input} //estilos
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
      />

      <TextInput
        style={stryles.input} //estilos
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
      />

      <TextInput
        style={stryles.input} //estilos
        placeholder="Telefono"
        value={telefono}
        onChangeText={setTelefono}
      />

      <TextInput
        style={stryles.input} //estilos
        placeholder="Fecha de Nacimiento"
        value={fechaNacimiento}
        onChangeText={setFechaNacimineto}
      />

      <Button title="Agregar Usuario" onPress={agregarUsuario}></Button>

      <ListaUsuario></ListaUsuario>
    </View>
  );
}

const stryles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "green",
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 10,
  },
});
