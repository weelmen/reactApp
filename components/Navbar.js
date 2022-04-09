import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const NavBar = ({navBarText}) => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.textStyle}>{navBarText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  navBar: {
    backgroundColor: '#2791e3',
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomEndRadius:15,
    // borderBottomStartRadius:15
  },
});

export default NavBar;