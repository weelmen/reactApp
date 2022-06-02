import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, ButtonGroup, Icon } from "react-native-elements";
import Img from "../images/jeune-femme.jpg";
const NavBar = (props) => {
  const [selectedUpperIndex, setSelectedUpperIndex] = useState(0);
  const Buttons = <View>

  </View>
  return (
    <View style={styles.navBar}>

      <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', }}>
        <View style={{ flex: 1, alignItems: 'flex-start', alignSelf: 'center' }}>
          <View >
            <Image style={{/*flex:'',alignSelf:'center',alignContent:'center',*/ height: 37, width: 37, borderRadius: 30 }} source={Img} />
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center', }}>
          <View style={{/*flex:'',alignSelf:'center',alignContent:'center',*/backgroundColor: 'grey', height: 30, width: 30, borderRadius: 3 }}></View>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', alignSelf: 'center', }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.textStyle, { alignSelf: "flex-start" }]}>TND 300</Text>
            <Icon
              style={{ alignSelf: "flex-end", marginLeft: 5/* ,backgroundColor:'#ffa457'*/ }}
              name='credit-card'
              type='font-awesome'
              size={16}
              color={'black'}

            />
          </View>
        </View>

      </View>
      



    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  navBar: {
    backgroundColor: '#ffffff',
    //width: '100%',
    height: '6%',
    marginLeft: '3%',
    marginRight: '3%',
    marginTop:'3%'
    
    //justifyContent: 'center',
    //alignItems: 'center',
    // borderBottomEndRadius:15,
    // borderBottomStartRadius:15
  },
});

export default NavBar;