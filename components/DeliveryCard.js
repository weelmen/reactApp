import React, { useState } from "react";
import { Icon, Card, Button, Divider } from "react-native-elements";
import { AirbnbRating, Pressable, StyleSheet, View, Text, Image } from 'react-native';
import Drawer from 'react-native-drawer'
import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';



export default class DeliveryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Left1: "Restaurant name and address",
            Left2: "Delivery address",
            Left3: "Meal ready in 15 min",
            Right1: "Pending",
            Right2: "1.3 km 23 min",
            Right3: "4 TND",

        };

    }

    render() {


        const rightButton = (

            <SwipeButtonsContainer style={{ borderRadius: 0}}>
                <View style={{/* flex: 1,*/ flexDirection: 'row',  /*borderRadius: 10, backgroundColor: 'red',alignItems:'center'*/ height: 100 }}
                >
                    <View style={{

                        flex: 1,
                        alignContent: 'center',
                        borderTopLeftRadius:5,
                        borderBottomLeftRadius:5,
                       
                        backgroundColor: '#fa7d9b',
                       // borderRadius: 10,
                        marginTop: 5,
                        marginBottom: 5,
                     //   marginRight:5
                     marginLeft:-15
                        //margin:20
                    }}
                    >
                        <Pressable style={{
                         margin:20
                        }}>
                            <Text>1</Text>
                        </Pressable>

                    </View>
                    <View style={[{

                        flex: 1,
                        alignContent: 'center',
                        borderTopRightRadius:5,
                        borderBottomRightRadius:5,
                        backgroundColor: '#7dff9b',
                       // borderRadius: 10,
                        //   borderTopRightRadius: 10,
                        marginTop: 5,
                        marginBottom: 5,
                        marginRight:5
                    }/*,styles.container*/]}
                    >
                        <Pressable style={{
                        margin:20
                        }} >
                            <Text>2</Text>
                        </Pressable>

                    </View>
                </View>


            </SwipeButtonsContainer>

        );

        return (

            <View>
                <SwipeProvider mode={'single'} closeTrigger={'onButtonShowed'}>
                    <SwipeItem
                        style={[{ borderRadius: 20, flex: 1 }]}
                        swipeContainerStyle={{ borderRadius: 20, }}/*[styles.swipeContentContainerStyle]}*/
                        rightButtons={rightButton}
                        disableSwipeIfNoButton={true}
                        /* leftButtons={}*/>










                        <Card containerStyle={{

                            borderRadius: 10,
                            //   borderTopRightRadius: 10,
                            borderWidth: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            marginTop: 5,
                            marginBottom: 5
                        }} wrapperStyle={{
                            backgroundColor: '#f5f5f5',
                            borderRadius: 10,
                            //  borderTopRightRadius: 10,
                        }}>
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
                                            style={[styles.text, { color: '#424242' }]}>{this.state.Left1}</Text>

                                    </View>
                                    <View
                                        style={{
                                            // flex: 1,
                                            alignItems: 'flex-end',
                                            alignSelf: 'center'
                                        }}>
                                        <Text style={[styles.text, { color: '#847bfd' }]}>{this.state.Right1}</Text>
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
                        </Card>







                    </SwipeItem>
                </SwipeProvider>
            </View>

        );
    }
}






const styles = StyleSheet.create({
    container: {
        margin: '2%',
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

});