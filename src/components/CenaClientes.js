import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const cliente = require('../imgs.detalhe_cliente.png');
const imgCliente1 = require('../imgs.cliente1.png');
const imgCliente2 = require('../imgs.cliente2.png');


export default class CenaClientes extends Component {
  render() {
    return (
      <ScrollView>

        <BarraNavegacao voltar={true} navigator={ this.props.navigator } />

        <View style={ styles.viewTitulo }>
          <Image source={cliente} />
          <Text style={ styles.titulo }>Nossos Clientes</Text>
        </View>

        <View style={ styles.listaCliente }>
          <Image  source={imgCliente1} />
          <Text style={ styles.txtCliente }> Aqui um texto do cliente um</Text>
        </View>          

        <View style={ styles.listaCliente }>
          <Image  source={imgCliente2} />
          <Text style={ styles.txtCliente }> Aqui um texto do cliente dois</Text>
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  viewTitulo : {
    flexDirection: 'row',
    marginTop: 10
  },
  titulo: {
    fontSize:22,
    color: '#B9C941',
    fontWeight : 'bold',
    paddingTop: 30,
    paddingLeft: 30
  },
  listaCliente:{
    paddingLeft:20,
    paddingTop: 15,
  },
  txtCliente: {
    paddingLeft:30
  }
});