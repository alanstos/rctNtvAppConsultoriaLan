import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight 
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

        <BarraNavegacao voltar={false } />

        <View style={ styles.main }>
          <Image source={logo} />
        </View>
        <View style={ styles.cards }>

          <TouchableHighlight onPress={ () => { this.props.navigator.push({index:1}); } } >
            <Image style={ styles.cardIcone } source={menuCliente} />
          </TouchableHighlight>
          <TouchableHighlight onPress={ () => { this.props.navigator.push({index:2}); } } >
            <Image style={ styles.cardIcone } source={menuContato} />
          </TouchableHighlight>          
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