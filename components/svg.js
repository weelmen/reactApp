
import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Logo from "../icons/check_box_outline_blank_black_24dp.svg";
import Logo1 from "../icons/autocode.svg";


export default class SVGLOGO extends React.Component{
  render() {
    return (
      <SafeAreaView style={styles.container}>
 
     
          <Logo1 style={styles.logo} />
          

      </SafeAreaView>
    );
  }
}

const styles = {
  logo: {
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  scrollView: {
    width: '100%',
  },
  containerStyles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};