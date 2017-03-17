import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgEmpresa = require('../imgs/menu_empresa.png');

class CenaEmpresa extends Component {
  render() {
    return (
      <ScrollView style={ styles.cena }>

        <BarraNavegacao voltar={true} navigator={ this.props.navigator } colorFundo={ '#EC7148' } />

        <View style={ styles.viewTitulo }>
          <Image source={imgEmpresa} />
          <Text style={ styles.titulo }>Empresa</Text>
        </View>

        
      </ScrollView>
    );
  }
}

export default CenaEmpresa;

const styles = StyleSheet.create({
  cena: {
    flex: 1,
    backgroundColor: '#fff'
  },  
  viewTitulo : {
    flexDirection: 'row',
    marginTop: 10
  },
  titulo: {
    fontSize:22,
    color: '#EC7148',
    fontWeight : 'bold',
    paddingTop: 30,
    paddingLeft: 30
  }
});