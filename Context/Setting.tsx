import { View, Text, Button,StyleSheet } from 'react-native'
import React from 'react'
import { useContextUsuario } from './ContextProvider';


export default function Setting() {

    const {isDarkTheme, toggleTheme} = useContextUsuario();

    return (
      <View style={[style.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
      <Text style={{ color: isDarkTheme ? '#fff' : '#000' }}>
          Tema Actual: {isDarkTheme ? 'Oscuro' : 'Claro'}
      </Text>
      <Button
          title='Cambiar Color'
          onPress={toggleTheme} // Asegúrate de llamar a la función
      />
  </View>
      )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    }
})