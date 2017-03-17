import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgServico = require('../imgs/menu_servico.png');

class CenaServicos extends Component {
  render() {
    return (
      <ScrollView>

        <BarraNavegacao voltar={true} navigator={ this.props.navigator } />

        <View style={ styles.viewTitulo }>
          <Image source={imgServico} />
          <Text style={ styles.titulo }>Serviços</Text>
        </View>

        
      </ScrollView>
    );
  }
}

export default CenaServicos;

const styles = StyleSheet.create({
  viewTitulo : {
    flexDirection: 'row',
    marginTop: 10
  },
  titulo: {
    fontSize:22,
    color: '#19d1c8',
    fontWeight : 'bold',
    paddingTop: 30,
    paddingLeft: 30
  }
});