import React from "react";
import { Icon, Card } from "react-native-elements";
import ImgMenu from "../images/menu1.jpeg";
import test from "../images/Menu1.jpg";
import { AirbnbRating,Pressable, StyleSheet, View, Text, Image } from 'react-native';
import Ratings from "./Ratings";
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from "../screens/style";


export default class MenuCard extends React.Component {
    //state = {
    //     Imagesrc: imagesrc,
    /* restaurantName: '',
     workingTime: '',
     pressedFavorite: true*/
    //  };
    // 
    render() {
    /*    const { imagesrc = "../images/menu1.jpeg",
            restaurantName = "Restaurant's Name",
            workingTime = '',
            pressedFavorite = true } = this.props;
        //console.log(this.props.imagesrc);
        //      const { Imagesrc, } = this.state;
        // state.Imagesrc=this.props.imagesrc;
        //    const { imagesrc } = this.state;
        //   const {favorite} = this.state;*/
        // const favorite = this.state.pressedFavorite ? 'heart-alt' : 'heart';
        return (

            <Card containerStyle={{

                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderWidth: 0,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                marginRight: '4%',
                marginLeft: 0,
                maxWidth: '48%',
                minWidth: '44%',
                //maxHeight:'30%'
            }} wrapperStyle={{
                backgroundColor: '#f5f5f5',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            }}>
                <Pressable
                    style={{

                    }}
                    onPress={
                        this.props.onPress
                    }
                >
                    <View key={this.props.id}>
                        <Image source={{ uri: `${this.props.imagesrc}` }} style={styles.image} />



                        <View
                            style={{
                                position: "relative",
                                alignItems: "flex-start",
                                margin: 10

                            }}
                        >

                            <View style={styles.cardcontainent}>

                                <Card.Title style={styles.text}>{this.props.restaurantName}</Card.Title>

                            </View>


                            <View style={styles.cardcontainent}>

                                <Text style={{
                                    flexGrow: 1,
                                    flexShrink: 0,
                                    flexBasis: 100,
                                    marginBottom: 5,
                                    color:"#434343"
                                }}>Asian, chinese food</Text>

                            </View>



                        </View>
                    </View>
                </Pressable>
            </Card>


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
    text: {


        color: '#6258ff',
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 5,
        marginTop: 0,







        //  paddingTop: 100,

    },
    cardcontainent: {
        flexDirection: 'row',
        flex: 1

    }
});