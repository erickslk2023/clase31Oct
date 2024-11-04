import { View, Text, Button,StyleSheet } from 'react-native'
import React from 'react'
import { useContextUsuario } from './ContextProvider'

export default function Setting() {

    const {isDarkTheme, toggleTheme} = useContextUsuario();

    return (
        <View>
          <Text >
            Tema Actual{ isDarkTheme ? 'Oscuro':'claro'}
    
          </Text>
    
       <Button title='Cambiar Color'onPress={()=>{toggleTheme}}></Button>
        </View>
      )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})