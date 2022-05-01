import React from "react";
import { Icon, Card } from "react-native-elements";
import { AirbnbRating, Pressable, StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from "../screens/style";


export default class CartsCard extends React.Component {

    render() {


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
                backgroundColor: '#f5f5f5',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            }}>



                <View>


                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}>
                        <View
                            style={{

                                width: '18%',
                                margin: '2%'

                            }}>
                            <Image source={{ uri: `${this.props.imagesrc}` }} style={styles.image} />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                //  alignItems: 'flex-end',

                            }}>

                            <View
                                style={{
                                    flexDirection: 'column'
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row'
                                    }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            alignItems: 'flex-start',

                                        }}>
                                        <Text
                                            style={{
                                                color: '#6357ff'

                                            }}
                                        >{this.props.company_Name}</Text>
                                    </View>

                                    <Pressable
                                        style={{
                                            flex: 1,
                                            alignItems: 'flex-end',
                                            paddingRight: '2%'

                                        }}
                                        onPress={() => { }}
                                    >

                                        <Text
                                            style={{
                                                color: '#6357ff'

                                            }}
                                        >See details</Text>

                                    </Pressable>

                                </View>
                                <Text
                                style={{
                                    color: '#424242'

                                }}
                                >{this.props.agent_Name}</Text>
                                <Text
                                style={{
                                    color: '#424242',
                                    fontSize: 10,
                                    fontWeight: "300",
                                }}
                                >{this.props.workingTime}</Text>


                            </View>
                        </View>
                    </View>

                </View>
                <View>

                    <Text style={{ 
                        paddingLeft:'2%',
                        color: '#6357ff' }}>{this.props.restaurant_name}</Text>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",

                        }}>
                        <View
                            style={{
                                // flex

                               
                                width: '18%',
                                margin: '2%'
                            }}>
                             <Image source={{ uri: `${this.props.imagesrc}` }} style={styles.image} />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'flex-start',
                                
                            }}>
                            <Text
                            style={{color:'#424242'}}>x1 Food</Text>
                            <Text
                            style={{color:'#424242',fontSize: 11,fontWeight: "400"}}>16.5 TND</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'flex-end',
                                alignSelf: 'center'
                            }}>
                            <Text
                            style={{color:'#92feaa',fontSize: 15,fontWeight: "500"}}>Ready</Text>
                        </View>

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
        height: '100%',
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