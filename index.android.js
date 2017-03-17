import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class rctNtvAppConsultoriaLan extends Component {
  render() {
    return (

      <Navigator
        initialRoute={{ index: 0 }}
        renderScene={(route, navigator) => { 
        	if (route.index === 0){
				return (<CenaPrincipal navigator={ navigator } />)
        	}else if (route.index === 1){
				return  (<CenaClientes navigator={ navigator } />)
			}else if (route.index === 2){
				return  (<CenaContatos navigator={ navigator } />)
			}else if (route.index === 3){
				return  (<CenaEmpresa navigator={ navigator } />)
			}else if (route.index === 4){
				return  (<CenaServicos navigator={ navigator } />)
        	}          	   	

         }}
      />      

    );
  }
}

AppRegistry.registerComponent('rctNtvAppConsultoriaLan', () => rctNtvAppConsultoriaLan);
