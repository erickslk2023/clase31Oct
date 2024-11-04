import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { Usuario } from "../Modelos/Usuario";
import { contextoUsuario } from "./Context";

interface ViewReact {
  children: ReactNode;
}

export default function ContexProvider({ children }: ViewReact) {
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [correo, setCorreo] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");
  const [fechaNacimiento, setFechaNacimineto] = useState<string>("");
  const [listaUsuario, setlistaUsuario] = useState<Usuario[]>([]);

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    console.log("Cambiando tema:", !isDarkTheme);  // Verificar si el tema cambia
  };

  const agregarUsuario = () => {
    let body: Usuario = {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      telefono: telefono,
      fechaNacimiento: fechaNacimiento,
    };
    setlistaUsuario([...listaUsuario, body]);
    console.log(listaUsuario);
  };
  //escucha los eventos que se manipulan en el formulario
  useEffect(() => {}, [nombre]);
  useEffect(() => {}, [apellido]);
  useEffect(() => {}, [correo]);
  useEffect(() => {}, [telefono]);
  useEffect(() => {}, [fechaNacimiento]);

 
  
  return (
   
      <contextoUsuario.Provider
        value={{
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
          isDarkTheme,      
          toggleTheme,     
          
        }}
      >
        <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
        {children}
        </View>
        
      </contextoUsuario.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const useContextUsuario = () => {
  const context = useContext(contextoUsuario);
  if (!context) {
    throw new Error("useContextUsuario debe usarse dentro de un ContexProvider");
  }
  return context;
};
