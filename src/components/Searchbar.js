import { SearchBar,Icon } from 'react-native-elements';
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native"
export default class Searchbar extends React.Component {
  state = {
    search: '',
  };

  /*updateSearch = (search) => {
    this.setState({ search });
  };
*/
  render() {
    const { search } = this.state;

    return (


      
        <View

          style={[styles.searchBar, { flexDirection: 'row' }]}>
          <View
            style={{flex:1,marginLeft:'2%' /*alignSelf: 'flex-start'*/ }}>
            <TextInput
              onChangeText={(search) => this.setState({ search })}
              placeholder={'Search'}
              placeholderTextColor={'#e4e4e4'}



            />
          </View>
          <View
          style={{ alignSelf:'center',marginRight:'2%' }}>
            <Icon
              style={{}}
              name='search'
              type='material'
              size={26}
              onPress={()=>{}}
              color={'#d3d3d3'}
            />
          </View>

        </View>
     

  
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: '100%',
  },
  searchBar: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e4e4e4',
    borderRadius: 7,
    height: 40/*'7%'*/,
    margin: 15,
    marginBottom: 0,

    fontSize: 15,
    //  margin: 10,
    //  width: '90%',
    //  height: 50,
    backgroundColor: '#ffffff',
  },
});