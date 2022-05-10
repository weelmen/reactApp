import React, { useState } from "react";
import { Icon, Card, Button, Divider } from "react-native-elements";
import { AirbnbRating, Pressable, StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from "../screens/style";
import ThemedListItem from "react-native-elements/dist/list/ListItem";

function GetTotalPrice(data) {
    let total = 0;
    data.filter(item => {
        item.price !== 0 ? total = (total + (item.price * item.number)) : NaN
    })
    console.log("total =====", total);
    return (total)
};
function click(test) {

    console.log("total =====", test);

};
const AdditionalJSX = (props) => {
    const [deliveryfee, setDeliveryfee] = useState(4);
    return (
        <View>


            <Divider style={{ marginLeft: 12, marginRight: 12, marginTop: 12 }} color="#8d84fc" width={1} />
            <View>
                <View
                    style={[{
                        flex: 1,
                        flexDirection: "row",

                        // height:50,
                        // margin: 2
                    }, styles.container]}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'flex-start',

                            //marginRight: '2%',
                            marginLeft: '2%'

                        }}>
                        <Text
                            style={{ color: '#6357ff' }}>Initial price</Text>

                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'flex-end',
                            alignSelf: 'center'
                        }}>
                        <Text>{props.InitialPrice} TND</Text>
                    </View>


                </View>
                <View
                    style={[{
                        flex: 1,
                        flexDirection: "row",

                        // height:50,
                        // margin: 2
                    }, styles.container]}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'flex-start',

                            //marginRight: '2%',
                            marginLeft: '2%'

                        }}>
                        <Text
                            style={{ color: '#6357ff' }}>Delivery fee</Text>

                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'flex-end',
                            alignSelf: 'center'
                        }}>
                        <Text>{deliveryfee} TND</Text>
                    </View>


                </View>
                <View
                    style={[{
                        flex: 1,
                        flexDirection: "row",

                        // height:50,
                        // margin: 2
                    }, styles.container]}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'flex-start',

                            //marginRight: '2%',
                            marginLeft: '2%'

                        }}>
                        <Text
                            style={{ color: '#6357ff' }}>Total price</Text>

                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'flex-end',
                            alignSelf: 'center'
                        }}>
                        <Text>{props.InitialPrice + deliveryfee} TND</Text>
                    </View>


                </View>



            </View>


        </View>

    );

}
export default class CartsCard extends React.Component {

    render() {


        return (

            <Card containerStyle={{

                borderRadius: 10,
               // borderTopRightRadius: 10,
                borderWidth: 0,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
            }} wrapperStyle={{
                backgroundColor: '#f5f5f5',
                borderRadius: 10,
               // borderTopRightRadius: 10,
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
                                    {this.props.Hidedetails ? (<View>

                                    </View>
                                    ) : (<Pressable
                                        style={{
                                            flex: 1,
                                            alignItems: 'flex-end',
                                            paddingRight: '2%'

                                        }}
                                        onPress={() => { this.props.navigations.navigate('Confirm Order Screen') }}
                                    >

                                        <Text
                                            style={{
                                                color: '#6357ff',
                                                fontWeight: "400",
                                                fontSize: 12

                                            }}
                                        >See details</Text>

                                    </Pressable>)
                                    }
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
                    style={{ marginBottom: '3%', }}
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
                                        style={{ color: '#424242', fontSize: 11, fontWeight: "400" }}>{sub.price} TND</Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'flex-end',
                                        alignSelf: 'center'
                                    }}>
                                    <Text
                                        style={[{ fontSize: 14, fontWeight: "400" }, (sub.status == "Ready" || sub.status == "Delivered") ?
                                            styles.green :
                                            (sub.status == "Canceled") ?
                                                styles.red :
                                                styles.blue
                                        ]}>{sub.status}</Text>
                                </View>

                            </View>

                        );
                    })}
                    {this.props.ShowPriceDetails[0] ? (<AdditionalJSX InitialPrice={this.props.ShowPriceDetails[1]} />) :
                        (<View></View>)



                    }


                </View>








            </Card>


        );
    }
}
export class ConfirmButtonCartsCard extends React.Component {

    render() {


        return (

            <View>
                <Button
                    onPress={this.props.onPressConfirm}
                    buttonStyle={{
                        backgroundColor: '#6357ff',
                        borderRadius: 5,
                        marginTop: '5%',
                        marginLeft: "8%",
                        marginRight: "8%",
                        fontWeight: '400'
                    }} title={`Confirm order  (${this.props.price} TND)`}

                />
                <Pressable
                    onPress={this.props.onPressCancel}
                >
                    <Text
                        style={{ alignSelf: 'center', color: "#6357ff", fontSize: 13, marginTop: '3%' }}
                    >Cancel order</Text>

                </Pressable>


            </View>


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