import React from "react";
import { Icon, Card } from "react-native-elements";
import ImgMenu from "../images/menu1.jpeg";
import { AirbnbRating, StyleSheet, View, Text, Image } from 'react-native';
import Ratings from "./Ratings";
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from "../screens/style";

export default class Restaurantscard extends React.Component {
    state = {
        imagesrc: '',
        restaurantName: '',
        workingTime: '',
        pressedFavorite: true
    };
    
    render() {
        const { imagesrc } = this.state;
     //   const {favorite} = this.state;
        const favorite = this.state.pressedFavorite? 'heart-alt' : 'heart';
        return (

            <Card containerStyle={{

                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderWidth: 0,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
            }} wrapperStyle={{
                backgroundColor: '#e8e9e8',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            }}>


                <Image source={ImgMenu} style={styles.image} />




                <View
                    style={{
                        position: "relative",
                        alignItems: "flex-start",
                        margin: 10

                    }}
                >

                    <View style={styles.cardcontainent}>

                        <Card.Title style={styles.text}>Restaurant's Name</Card.Title>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                style={{

                                }}
                                onPress={() => {this.setState(
                                    {pressedFavorite: !this.state.pressedFavorite}
                                    
                                    )}
                                }
                            
                            >
                                <Icon
                                    style={{ alignSelf: "flex-end"/* ,backgroundColor:'#ffa457'*/ }}
                                    name={favorite}
                                    //  theme="outlined"
                                    type='fontisto'
                                    size={18}
                                    color={'#ffa457'}

                                />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.cardcontainent}>

                        <Text style={{
                            flexGrow: 1,
                            flexShrink: 0,
                            flexBasis: 100,
                            marginBottom: 5,
                        }}>Asian, chinese food</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400' }}>(352) </Text>
                        <Ratings />
                    </View>

                    <View style={styles.cardcontainent}>
                        <Text style={{
                            flexGrow: 1,
                            flexShrink: 0,
                            flexBasis: 1,
                        }}>09:00 - 23:00</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400' }}>23 min </Text>
                        <Icon
                            style={{}}
                            name='truck'
                            type='font-awesome'
                            size={16}
                            color={'#ffa457'}
                        />
                    </View>


                </View>

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


        color: '#ffa457',
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