import React, { useState } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
//import styles from "./style";
import { ScrollView, Keyboard,StyleSheet, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { ButtonGroup, SearchBar, Button, Icon, CheckBox, Divider, Card } from 'react-native-elements';
import ImgMenu from "../images/menu1.jpeg";
import MenuCard from "../components/Menuscard";
import Restaurantscard from "../components/Restaurantscard";
import Ratings from "../components/Ratings";









const FoodChoiceScreen = ({ navigation }) => {
    const [check1, setCheck1] = useState(false);
    const [pressedFavorite, setpressedFavorite] = useState(true);
    const [count, setCount] = useState(1);
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
                                    <TouchableOpacity

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
                                    </TouchableOpacity>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            alignSelf: 'center',
                                            color: '#6357ff'
                                        }}
                                    >{count}</Text>
                                    <TouchableOpacity
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
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                        <View style={styles.cardcontainent}>

                            <Text style={styles.text}

                            >Start at 3 TND</Text>
                            


                        </View>
                        




                    </View>


                    <View style={[styles.cardcontainent, { backgroundColor: '#ffffff', paddingLeft: 12, paddingRight: 12 ,paddingBottom:10,paddingTop:10}]}>

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
                    <View style={[styles.cardcontainent, { backgroundColor: '#f5f5f5', paddingRight: 12}]}>

                        <CheckBox
                            containerStyle={{ backgroundColor: '', margin: 0, marginLeft: 0, marginRight: 0 }}
                            title="Choice 1"
                              iconType="material-icons-outlined"
                              name="check_box_outline_blank"
                           /* checkedIcon={
                                <Icon
                                    name="check_box_outline_blank"
                                    type="material-icons-outlined"
                                    color="green"
                                    size={25}
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            uncheckedIcon={
                                <Icon
                                    name="check"
                                    type="material"
                                    color="grey"
                                    size={25}
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }*/
                            uncheckedIcon="add"
                            checked={check1}
                            onPress={() => setCheck1(!check1)}
                        />

                        <View


                            style={{

                                flex: 1,


                            }}>
                            <View style={{
                                flexDirection: 'row',
                                alignSelf: "flex-end",
                                



                            }}><Text style={[styles.text,{fontSize:30}]}>3 TND</Text>
                            </View>
                        </View>
                        
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