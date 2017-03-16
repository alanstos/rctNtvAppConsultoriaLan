import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs.logo.png');
const menuCliente = require('../imgs.menu_cliente.png');
const menuContato = require('../imgs.menu_contato.png');
const menuEmpresa = require('../imgs.menu_empresa.png');
const menuServico = require('../imgs.menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <ScrollView>

        <BarraNavegacao />

        <View style={ styles.main }>
          <Image source={logo} />
        </View>
        <View style={ styles.cards }>
          <Image style={ styles.cardIcone } source={menuCliente} />
          <Image style={ styles.cardIcone } source={menuContato} />
        </View>          
        <View style={ styles.cards }>
          <Image style={ styles.cardIcone } source={menuEmpresa} />
          <Image style={ styles.cardIcone } source={menuServico} />
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    marginTop: 10
  },
  cards:{
    justifyContent: 'center',
    flexDirection: 'row'
  },
  cardIcone: {
    marginHorizontal: 15,
    marginVertical: 15,
  }
});