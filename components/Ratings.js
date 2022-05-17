import * as React from "react";
import { Rating, AirbnbRating } from "react-native-elements";
import { StyleSheet, View, Text, Image } from 'react-native';
import logoImg from '../images/star2.png';
import logoImg2 from '../images/star2.png';

const starImageSize =18;
export default class Ratings extends React.Component {

  render() {
    return (
      <View style={{}}>
       
        <><Rating
          type="custom"
          imageSize={starImageSize}
         // readonly
          startingValue={3.65}
          ratingColor='#6357ff'
          ratingTextColor='#6357ff'
          ratingBackgroundColor='transparent'
          
        tintColor='#e8e9e8'
        />

        </>
        <View style={{flexDirection:'row',position :'absolute',}}>
          <Image
            style={styles.ratingimage}
            source={logoImg2}
          />
          <Image
            style={styles.ratingimage}
            source={logoImg2}
          />
          <Image
            style={styles.ratingimage}
            source={logoImg2}
          />
          <Image
            style={styles.ratingimage}
            source={logoImg2}
          />
          <Image
            style={styles.ratingimage}
            source={logoImg2}
          />
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 120,
    //borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 0,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
  },
  ratingimage: {
    width: starImageSize,
    height: starImageSize
  },
  text: {
    color: '#ffa457',
    borderRadius: 5,
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 10,
    marginTop: 0


    //  paddingTop: 100,

  },
});