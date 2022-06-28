import React, { useState, useEffect,useContext } from "react";
//import styles from "./style";
import { FlatList, ScrollView, Pressable, Keyboard, StyleSheet, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { ButtonGroup, SearchBar, Button, Icon, Divider, Card } from 'react-native-elements';
import ImgMenu from "../images/menu1.jpeg";
import MenuCard from "../components/Menuscard";
import Restaurantscard from "../components/Restaurantscard";
import Ratings from "../components/Ratings";
import CheckBox from "../components/CheckBox";
import CheckBoxList from "../components/CheckBoxList";
import Navigation from "../components/Navigation";
import { fakechoicedata } from '../api-json-server/fakedata.json'
import { fakechoicedata_test } from '../api-json-server/fakedata.json'

import CartContext from "../store/Context/cart/CartContext";






const FoodChoiceScreen = ( {navigation,route} ) => {

    const [count, setCount] = useState(1);
    const [sumprice, setSumprice] = useState(0);
    
    const [initialPrice, setInitialPrice] = useState(3);
    const [totalPrice, setTotalPrice] = useState(initialPrice);
    
    const [choice, setChoice] = useState(
        new Array(fakechoicedata.length).fill(false)
    );
    const data= route.params.data ; 
    const product= {
        id: data.id,
        price:initialPrice+sumprice,
        number:count,
        title: data.name,
        imgurl:data.srcimg,
        //default: true
    };
  
   //console.warn(route.params.test);

    //const data=props.route.params.datas 
    /*const  {cartItems,addToCart,
        removeFromCart}  = React.useContext();*/

 /*  const click= ()=>{

    console.log('test',cartItems);
   }*/
   

     function handleClick(context,product){


        var promise = new Promise(context.addProductToCart.bind(this, product))
        promise.then(navigation.navigate('Confirm Order Screen 1'))
       
     

    /*console.warn(product);*///navigation.navigate('Confirm Order Screen 1');
   }
    const choisePrices = (price, action) => {
        if (action == 'plus') {
            setSumprice((sumprice + price));
            setTotalPrice((initialPrice+sumprice + price)*count);
            
        }
        else if(action == 'minus'){setSumprice((sumprice - price));
            setTotalPrice((initialPrice+sumprice - price)*count);
            } 
    }
    const Total = (cnt)=>{

        setTotalPrice((initialPrice+sumprice)*cnt);
    }

    return (
        
                <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
                    <View style={{ height: '5%' }}>
                        <Navigation onPress={() => navigation.navigate('Menus Screen')} />
                    </View>
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

                            <Image source={{uri:`${data.srcimg}`}} style={styles.image} />




                            <View
                                style={{
                                    position: "relative",
                                    alignItems: "flex-start",
                                    margin: 12

                                }}
                            >

                                <View style={styles.cardcontainent}>

                                    <Card.Title style={styles.title}>{data.name}</Card.Title>

                                    <View


                                        style={{

                                            flex: 1,


                                        }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignSelf: "flex-end"



                                        }}>
                                            <Pressable

                                                onPress={() => { count > 1 ? (setCount(count - 1) ,Total(count - 1)): '' ; }}
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
                                                onPress={() => { setCount(count + 1); Total(count + 1) }}

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




                            {fakechoicedata_test.map((item, i) => {
                                return (
                                    <View>
                                        <View style={[styles.cardcontainent, { backgroundColor: '#ffffff', paddingLeft: 12, paddingRight: 12, paddingBottom: 10, paddingTop: 10 }]}>

                                            <Text style={styles.text}>{item.name}</Text>


                                            <View


                                                style={{

                                                    flex: 1,


                                                }}>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    alignSelf: "flex-end"



                                                }}><Text style={[styles.text, { fontWeight: "700" }]}>{item.option}</Text>
                                                </View>
                                            </View>

                                        </View>
                                        <CheckBoxList
                                            data={item}
                                            total={choisePrices}
                                        />
                                    </View>
                                );
                            })}

                            <View style={[styles.cardcontainent, { backgroundColor: '#f5f5f5', paddingRight: 12 }]}>





                            </View>

                        </Card>

                    </ScrollView>
                    <CartContext.Consumer>
                    {context => ( <View styles={{ backgroundColor: "#ffffff" }}>
                        <Button buttonStyle={{
                            backgroundColor: '#6357ff',
                            borderRadius: 5,

                            marginLeft: "10%",
                            marginRight: "10%",
                        }} title={`Add to cart  (${totalPrice} TND)`}
                            onPress={/*()=>{context.addProductToCart.bind(this, product)}*/()=>handleClick(context,product)/*context.addProductToCart.bind(this, product)*/}/>
                    </View>
                    )}
                    </CartContext.Consumer>

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