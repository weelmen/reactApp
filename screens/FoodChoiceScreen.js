import React, { useState,useEffect } from "react";
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import styles from "./style";
import { FlatList, ScrollView, Pressable, Keyboard, StyleSheet, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { ButtonGroup, SearchBar, Button, Icon, Divider, Card } from 'react-native-elements';
import ImgMenu from "../images/menu1.jpeg";
import MenuCard from "../components/Menuscard";
import Restaurantscard from "../components/Restaurantscard";
import Ratings from "../components/Ratings";
//import Logo from "../icons/check_box_outline_blank_black_24dp.svg";
//import SVGLOGO from "../components/svg";
import CheckBox from "../components/CheckBox";
import { fakechoicedata } from '../api-json-server/fakedata.json'






const FoodChoiceScreen = ({ navigation }) => {
    const [check1, setCheck1] = useState(false);
    const [pressedFavorite, setpressedFavorite] = useState(true);
    const [count, setCount] = useState(1);
    const [sumprice, setSumprice] = useState(0);
    const [checked, setChecked] = useState([]);
    const [index, setIndex] = useState([]);
    const [data, setData] = useState({fakechoicedata});
   // const [choice, setChoice] = useState([]);
    const [selected, setSelected] = useState([]);
    const [choice, setChoice] = useState(
        new  Array(fakechoicedata.length).fill(false)
    );
    const [choice1, setChoice1] = useState(
        new  Array(fakechoicedata.length).fill(false)
    );
    const [choice2, setChoice2] = useState(
        new  Array(fakechoicedata.length).fill(false)
    );
      
          const  consol=async (i,price) => {
           // console.log(choice);
           // console.log(price);
          // await  setChoice({...choice, [i] : !choice[i]})
           if(choice[i]!=true){
           // console.log(choice)  
            setChoice({...choice, [i] : !choice[i]});
          //  console.log(choice)
            total(price,true);}
            else 
            {setChoice({...choice, [i] : !choice[i]});
                total(price,false)};
          };
          const  checkedname=(i) => {
              if(choice[i]===true) return 0
              
          };
       const  total=(price,bool) => {
        if(bool==true)
        {setSumprice(sumprice+price);
            /*console.log(price);
            console.log(bool);*/
        }
        else setSumprice(sumprice-price);
        }

    return (

        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>

            <ScrollView style={{ backgroundColor: '#fcfcfc', flex: 1, }} >


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



                            }}><Text style={[styles.text, { fontWeight: "700" }]}>Required(1)</Text>
                            </View>
                        </View>
                    </View>

                    {fakechoicedata.map((choicedata, i) => {
                        return (
                            <View key={choicedata.id}>
                                <View style={[styles.cardcontainent, { backgroundColor: '#f5f5f5', paddingLeft: 12, paddingRight: 12, paddingBottom: 10, paddingTop: 10 }]}>
                                    <View style={{

                                        flex: 1,
                                        //backgroundColor: "blue"


                                    }}>
                                        <CheckBox
                                            onPress={() => { /* handleCheck*/ consol(i,choicedata.price)}}

                                            title={choicedata.name}
                                            price={choicedata.price}
                                            isChecked={choice[i]/*checked[choicedata.id]*/}
                                            bool ={checkedname(i)}
                                        />
                                    </View>
                                </View>

                                <Divider style={{ marginLeft: 12, marginRight: 12 }} color="#ffffff" width={2} />
                            </View>


                        );
                    })}
                   
                   
                    <View style={[styles.cardcontainent, { backgroundColor: '#ffffff', paddingLeft: 12, paddingRight: 12, paddingBottom: 10, paddingTop: 10 }]}>

                        <Text style={styles.text}>Sauces</Text>

                        <View


                            style={{

                                flex: 1,


                            }}>
                            <View style={{
                                flexDirection: 'row',
                                alignSelf: "flex-end"



                            }}><Text style={[styles.text, { fontWeight: "700" }]}>Max 4</Text>
                            </View>
                        </View>
                    </View>
                    {fakechoicedata.map((choicedata,i) => {
                        return (
                            <View key={choicedata.id}>
                                <View style={[styles.cardcontainent, { backgroundColor: '#f5f5f5', paddingLeft: 12, paddingRight: 12, paddingBottom: 10, paddingTop: 10 }]}>
                                    <View style={{

                                        flex: 1,
                                        //backgroundColor: "blue"


                                    }}>
                                        <CheckBox
                                            onPress={() => { /* handleCheck*/ consol(i,choicedata.price)}}

                                            title={choicedata.name}
                                            price={choicedata.price}
                                            isChecked={choice[i]/*checked[choicedata.id]*/}
                                            bool ={checkedname(i)}
                                        />
                                        
                                    </View>
                                   
                                </View>

                                <Divider style={{ marginLeft: 12, marginRight: 12 }} color="#ffffff" width={2} />
                            </View>


                        );
                    })}
                    <View style={[styles.cardcontainent, { backgroundColor: '#ffffff', paddingLeft: 12, paddingRight: 12, paddingBottom: 10, paddingTop: 10 }]}>

                        <Text style={styles.text}>Extras</Text>

                        <View


                            style={{

                                flex: 1,


                            }}>
                            <View style={{
                                flexDirection: 'row',
                                alignSelf: "flex-end"



                            }}>
                            </View>
                        </View>
                    </View>
                    {fakechoicedata.map((choicedata,i) => {
                        return (
                            <View key={choicedata.id} >
                                <View style={[styles.cardcontainent, { backgroundColor: '#f5f5f5', paddingLeft: 12, paddingRight: 12, paddingBottom: 10, paddingTop: 10 }]}>
                                    <View style={{

                                        flex: 1,
                                        //backgroundColor: "blue"


                                    }}>
                                        <CheckBox
                                           onPress={() => { /* handleCheck*/ consol(i,choicedata.price)}}

                                           title={choicedata.name}
                                           price={choicedata.price}
                                           isChecked={choice[i]/*checked[choicedata.id]*/}
                                           bool ={checkedname(i)}
                                        />
                                    </View>
                                </View>

                                <Divider style={{ marginLeft: 12, marginRight: 12 }} color="#ffffff" width={2} />
                            </View>


                        );
                    })}
                    <View style={[styles.cardcontainent, { backgroundColor: '#f5f5f5', paddingRight: 12 }]}>





                    </View>

                </Card>

            </ScrollView>
            <View styles={{ backgroundColor: "#ffffff" }}>
                <Button buttonStyle={{
                    backgroundColor: '#6357ff',
                    borderRadius: 5,

                    marginLeft: "10%",
                    marginRight: "10%",
                }} title={`Add to cart  (${sumprice} TND)`} />
            </View>
<Text>test {sumprice}  test</Text>
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
        fontWeight: "500",
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