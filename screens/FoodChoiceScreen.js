import React, { useState } from "react";
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import styles from "./style";
import { ScrollView, Pressable, Keyboard, StyleSheet, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { ButtonGroup, SearchBar, Button, Icon, Divider, Card } from 'react-native-elements';
import ImgMenu from "../images/menu1.jpeg";
import MenuCard from "../components/Menuscard";
import Restaurantscard from "../components/Restaurantscard";
import Ratings from "../components/Ratings";
//import Logo from "../icons/check_box_outline_blank_black_24dp.svg";
//import SVGLOGO from "../components/svg";
import CheckBox from "../components/CheckBox";







const FoodChoiceScreen = ({ navigation }) => {
    const [check1, setCheck1] = useState(false);
    const [pressedFavorite, setpressedFavorite] = useState(true);
    const [count, setCount] = useState(1);
    const [choice, setChoice] = useState(false);
    //const imagesrc=imagesrc;
    /*  state = {
     //     imagesrc: '',
     //     restaurantName: '',
      //    workingTime: '',
          pressedFavorite: true
      };*/

    const favorite = pressedFavorite ? 'heart-alt' : 'heart';
    return (

        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <ScrollView style={{ backgroundColor: '#fcfcfc', flex: 1, }}>

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

                    <Image source={ImgMenu} style={styles.image} />




                    <View
                        style={{
                            position: "relative",
                            alignItems: "flex-start",
                            margin: 12

                        }}
                    >

                        <View style={styles.cardcontainent}>

                            <Card.Title style={styles.title}>Restaurant's Name</Card.Title>

                            <View


                                style={{

                                    flex: 1,


                                }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignSelf: "flex-end"



                                }}>
                                    <Pressable

                                        onPress={() => { count > 1 ? setCount(count - 1) : '' }}
                                    >
                                        <Icon
                                            style={{/* alignSelf: "flex-end" ,backgroundColor:'#ffa457'*/borderWidth: 10, borderColor: "transparent" }}
                                            name='minus'
                                            //  theme="outlined"
                                            type='feather'
                                            size={16}
                                            color={'#6357ff'}

                                        />
                                    </Pressable>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            alignSelf: 'center',
                                            color: '#6357ff'
                                        }}
                                    >{count}</Text>
                                    <Pressable
                                        style={{

                                        }}
                                        onPress={() => { setCount(count + 1) }}

                                    >



                                        <Icon
                                            style={{ /*alignSelf: "flex-end" ,backgroundColor:'#ffa457'*/borderRightWidth: 0, borderWidth: 10, borderColor: "transparent" }}
                                            name='plus'
                                            //  theme="outlined"
                                            iconStyle={{}}
                                            type='feather'
                                            size={16}
                                            color={'#6357ff'}

                                        />
                                    </Pressable>
                                </View>
                            </View>
                        </View>


                        <View style={styles.cardcontainent}>

                            <Text style={styles.text}

                            >Start at 3 TND</Text>



                        </View>





                    </View>


                    <View style={[styles.cardcontainent, { backgroundColor: '#ffffff', paddingLeft: 12, paddingRight: 12, paddingBottom: 10, paddingTop: 10 }]}>

                        <Text style={styles.text}>Choices</Text>

                        <View


                            style={{

                                flex: 1,


                            }}>
                            <View style={{
                                flexDirection: 'row',
                                alignSelf: "flex-end"



                            }}><Text style={styles.text}>Required(1)</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={[styles.cardcontainent, { backgroundColor: 'transparent', paddingLeft: 12, paddingRight: 12, paddingBottom: 10, paddingTop: 10 }]}>
                        <View style={{

                            flex: 1,
                            //backgroundColor: "blue"


                        }}>
                            <CheckBox
                                onPress={() => setChoice(!choice)}
                                title="Choice 1"
                                price="3 TND"
                                isChecked={choice}
                            />
                        </View>
                    </View>
                    <View style={[styles.cardcontainent, { backgroundColor: '#f5f5f5', paddingRight: 12 }]}>





                    </View>

                </Card>

            </ScrollView>
        </View>


    );
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
    title: {


        color: '#6357ff',
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 5,
        marginTop: 0,







        //  paddingTop: 100,

    },

    text: {


        color: '#4e4e4e',
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
export default FoodChoiceScreen;