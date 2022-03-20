import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../images/Logo.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>Sign In</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
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