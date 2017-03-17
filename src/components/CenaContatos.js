import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgContato = require('../imgs/detalhe_contato.png');

class CenaContatos extends Component {
  render() {
    return (
      <ScrollView>

        <BarraNavegacao voltar={true} navigator={ this.props.navigator } />

        <View style={ styles.viewTitulo }>
          <Image source={imgContato} />
          <Text style={ styles.titulo }>Contato</Text>
        </View>

        
      </ScrollView>
    );
  }
}

export default CenaContatos;

const styles = StyleSheet.create({
  viewTitulo : {
    flexDirection: 'row',
    marginTop: 10
  },
  titulo: {
    fontSize:22,
    color: '#61BD8C',
    fontWeight : 'bold',
    paddingTop: 30,
    paddingLeft: 30
  }
});