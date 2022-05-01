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



                <View

                    style={styles.container}>


                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            //margin: '1%'

                        }}>
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                //width: '18%',
                                //marginRight: '2%'

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
                                    flexDirection: 'column',
                                    marginLeft: '2%'
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
                                                color: '#6357ff',
                                                fontSize: 15,
                                                fontWeight: "400",
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
                                                color: '#6357ff',
                                                fontWeight: "400",
                                                fontSize: 12

                                            }}
                                        >See details</Text>

                                    </Pressable>

                                </View>
                                <Text
                                    style={{
                                        color: '#424242',
                                        // fontSize: 16,
                                        fontWeight: "500"
                                    }}
                                >{this.props.agent_Name}</Text>
                                <Text
                                    style={{
                                        color: '#424242',
                                        fontSize: 10,
                                        fontWeight: "400",
                                    }}
                                >{this.props.workingTime}</Text>


                            </View>
                        </View>
                    </View>

                </View>

                <View
                style={ {marginBottom: '3%',}}
                >

                    <Text style={{
                        paddingLeft: '3%',
                        color: '#6357ff',
                        fontSize: 15,
                        fontWeight: "400",

                    }}>{this.props.restaurant_name}</Text>

                    {this.props.data.items.map((sub, i) => {
                        return (
                            <View
                                style={[{
                                    flex: 1,
                                    flexDirection: "row",

                                    // height:50,
                                    // margin: 2
                                }, styles.container]}>
                                <View
                                    style={{
                                        // flex
                                        //flex: 0,

                                        width: 50,
                                        height: 50,


                                    }}>
                                    <Image source={{ uri: `${sub.imgurl}` }} style={styles.image} />

                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'flex-start',
                                        alignSelf: 'center',
                                        //marginRight: '2%',
                                        marginLeft: '2%'

                                    }}>
                                    <Text
                                        style={{ color: '#424242' }}>x{sub.number} {sub.name}</Text>
                                    <Text
                                        style={{ color: '#424242', fontSize: 11, fontWeight: "400" }}>16.5 TND</Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'flex-end',
                                        alignSelf: 'center'
                                    }}>
                                    <Text
                                        style={[{ fontSize: 15, fontWeight: "500" }, (sub.status == "Ready" || sub.status == "Delivered") ?
                                            styles.green :
                                            (sub.status == "Canceled") ?
                                                styles.red :
                                                styles.blue
                                        ]}>{sub.status}</Text>
                                </View>

                            </View>
                        );
                    })}

                </View>








            </Card>


        );
    }





}


const styles = StyleSheet.create({
    container: {
        margin: '3%',
        marginBottom: 0,



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