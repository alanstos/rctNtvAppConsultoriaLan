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
      <ScrollView>

        <BarraNavegacao voltar={true} navigator={ this.props.navigator } />

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
  viewTitulo : {
    flexDirection: 'row',
    marginTop: 10
  },
  titulo: {
    fontSize:22,
    color: '#ecd1c8',
    fontWeight : 'bold',
    paddingTop: 30,
    paddingLeft: 30
  }
});