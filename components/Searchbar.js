import { SearchBar } from 'react-native-elements';
import React, { useState } from "react";
export default class Searchbar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        containerStyle={{
          //flex:1,
          justifyContent: 'center',
          borderTopWidth: 1,
          borderBottomWidth:1,
          borderLeftWidth:1,
          borderRightWidth:1,
          borderTopColor: '#e4e4e4',
          borderBottomColor: '#e4e4e4',
          borderLeftColor: '#e4e4e4',
          borderRightColor: '#e4e4e4',
          //borderColor: '#f9f9f9',
          backgroundColor: '#ffffff',
          borderRadius: 7,
          height: 40/*'7%'*/,
          margin: 15,
          marginBottom:0
        /*  marginTop: 10,
          marginLeft: 10,
          marginRight: 10,*/

        }}

        
        inputContainerStyle={{ backgroundColor: 'transparent', }}
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}