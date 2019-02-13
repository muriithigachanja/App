import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Logo extends Component{
  render(){
    return(
        <View style={styles.container}>
          <Image style={{width: 40, height: 70}}
            source={require('../images/logo.png')}/>
          <Text style={styles.logoText}>Venda Direct</Text>
        </View>
    )
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  logoText:{
    marginVertical: 15,
    fontSize:30,
    color:'#ffffff'
  }
});
