import React from "react";
import { View, ActivityIndicator ,Text} from "react-native";

export default class Loading extends React.Component{
    render() {
      return (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0,0,0, 0.6)', flex: 1 }}>
        <ActivityIndicator size="large" color="#c7ceff" />
        <Text style={{
            fontSize: 20, color: '#c7ceff', borderRadius: 5,
            textShadowOffset: { width: 2, height: 2 },
            textShadowColor: '#555555',
            textShadowRadius: 6,
        }}>Loading . . .</Text>

    </View>
      );
    }
  }
  