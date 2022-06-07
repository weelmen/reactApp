import React, {Component} from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../images/Logo.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logoImg} style={styles.image} />
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
  },
  text: {
    color: 'black',
    borderRadius: 5,
    backgroundColor: 'transparent',
    fontSize: 40,
    fontWeight: "800",
  //  paddingTop: 100,
    marginTop: 20,
  },
});