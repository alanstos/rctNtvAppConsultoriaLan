import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
  Image
} from 'react-native';

const imgVoltar = require( '../imgs/btn_voltar.png' );

export default class BarraNavegacao extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {

    if (  this.props.voltar  ) {

      return (
        <View style={ styles.barra}>
          

          <View style={ styles.barraTitulo}>
            <TouchableHighlight style={ styles.iconVoltar } onPress={ () => { this.props.navigator.pop() } }>
              <Image source={ imgVoltar } />
            </TouchableHighlight>
            <Text style={ styles.titulo}>Consultoria Lan</Text>
          </View>

        </View>
      );      

    }

    return (
        <View style={ styles.barra}>
          <StatusBar hidden={false} backgroundColor={'#ccc'}/>      

          <View style={ styles.barraTitulo}>
            <Text style={ styles.titulo}>Consultoria Lan</Text>
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  barra: {
    backgroundColor: '#ccc',    
    height: 70,    

  },  
  barraTitulo: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  titulo: {
    fontSize: 20,
    fontWeight : 'bold',
    color: '#000',
    flex: 1,
    textAlign : 'center'
  },
  iconVoltar: {
    paddingLeft : 10,
  }
});


