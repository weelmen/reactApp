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
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: '#f5f5f5',
          backgroundColor: '#ffffff',
          borderRadius: 5,
          height: 45,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,

        }}

        
        inputContainerStyle={{ backgroundColor: 'transparent', }}
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}