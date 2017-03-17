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
      <ScrollView style={ styles.cena }>

        <BarraNavegacao voltar={true} navigator={ this.props.navigator } colorFundo={ '#19d1c8' }  />

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
    color: '#19d1c8',
    fontWeight : 'bold',
    paddingTop: 30,
    paddingLeft: 30
  }
});