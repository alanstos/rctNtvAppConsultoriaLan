import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

export default class BarraNavegacao extends Component {
  render() {
    return (
      <View style={ styles.barraTitulo}>
        <StatusBar hidden={false} 
          backgroundColor={'#ccc'}/>      
        <Text style={ styles.titulo}>Consultoria Lan</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#ccc',    
    height: 70,
    justifyContent: 'center',

  },  
  titulo: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight : 'bold',
    color: '#000'
    
  }
});


