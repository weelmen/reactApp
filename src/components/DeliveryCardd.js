import React, { useState } from "react";
import { Icon, Card, Button, Divider } from "react-native-elements";
import { AirbnbRating, Pressable, StyleSheet, View, Text, Image } from 'react-native';





export default class DeliveryCardd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Left1: "Restaurant name and address",
            Left2: "Delivery address",
            Left3: "Meal ready in 15 min",
            Right1: "Pending",
            Right2: "1.3 km 23 min",
            Right3: "4 TND",
            Swipe: false

        };

    }

    render() {



        return (




            <View style={{flex:1/* height: '100%',width:'100%' */}}>


                <View style={styles.container}>



                    <View
                        style={[{
                            flex: 1,
                            flexDirection: "row",

                            // height:50,
                            // margin: 2
                        }, styles.itemincard]}>
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'flex-start',

                                //marginRight: '2%',
                                marginLeft: '2%'

                            }}>
                            <Text
                                style={[styles.text, { color: '#6357ff' }]}>{this.state.Left1}</Text>

                        </View>
                        <View
                            style={{
                                // flex: 1,
                                alignItems: 'flex-end',
                                alignSelf: 'center'
                            }}>
                            <Text style={[styles.text, { color: '#6357ff' }]}>{this.state.Right1}</Text>
                        </View>


                    </View>
                    <View
                        style={[{
                            flex: 1,
                            flexDirection: "row",

                            // height:50,
                            // margin: 2
                        }, styles.itemincard]}>
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'flex-start',

                                //marginRight: '2%',
                                marginLeft: '2%'

                            }}>
                            <Text
                                style={[styles.text, { color: '#424242' }]}>{this.state.Left2}</Text>

                        </View>
                        <View
                            style={{
                                // flex: 1,
                                alignItems: 'flex-end',
                                flexDirection: 'row'
                            }}>
                            <Text style={[styles.text, { color: '#424242' }]}>{this.state.Right2}</Text>
                            <View style={{ marginLeft: 5, marginRight: 0, alignSelf: 'flex-start' }}>
                                <Icon
                                    style={{}}
                                    name='truck'
                                    type='font-awesome'
                                    size={16}
                                    color={'#6357ff'}
                                /></View>
                        </View>


                    </View>
                    <View
                        style={[{
                            flex: 1,
                            flexDirection: "row",

                            // height:50,
                            // margin: 2
                        }, styles.itemincard]}>
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'flex-start',

                                //marginRight: '2%',
                                marginLeft: '2%'

                            }}>
                            <Text
                                style={[styles.text, { color: '#424242' }]}>{this.state.Left3}</Text>

                        </View>
                        <View
                            style={{
                                //   flex: 1,
                                alignItems: 'flex-end',

                            }}>
                            <Text style={[styles.text, { color: '#424242' }]}>{this.state.Right3}</Text>

                        </View>


                    </View>





                </View>




            </View>





        );
    }
}


/*
const updateState=(state,mode)=>{ 
    // Changing state 
   /* if((!state.Swipe&&mode=="ON")||(state.Swipe&&mode=="OFF")){
    this.setState({...state,Swipe:!state.Swipe})*/
/* console.log("test");/*
//}

} ;
*/


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: '2%',
        backgroundColor: '#f5f5f5',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginHorizontal: 15,
        marginTop: 0
        // marginBottom: 0,



    },
    itemincard: {
        margin: '0.5%',



    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 7,
        // borderTopLeftRadius: 10,
        //  borderTopRightRadius: 10,
        borderWidth: 0,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
    },
    text: {



        fontSize: 13,
        fontWeight: "500",
        marginBottom: 5,
        marginTop: 0,
        //  paddingTop: 100,

    },
    cardcontainent: {
        flexDirection: 'row',
        flex: 1

    },

    green: {
        color: '#92feaa',
    },
    red: {
        color: '#fa7d9b',
    },
    blue: {
        color: '#847bfd',
    },
    swipeON: {
        borderRadius: 0,

        /*  borderBottomRightRadius:0,
          borderTopRightRadius:0,
          borderBottomLeftRadius:10,
          borderTopLeftRadius:10*/
    },
    swipeOFF: {


        borderRadius: 10,

    },
    swipebuttonON: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,

    },
    swipebuttonOFF: {


        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,

    },

});