import React, { useState } from 'react';
import { View, Text, StyleSheet, Image ,Pressable} from 'react-native';
import { Button, ButtonGroup, Icon } from "react-native-elements";
import Img from "../images/jeune-femme.jpg";
const Navigation = (props) => {
    const [selectedUpperIndex, setSelectedUpperIndex] = useState(0);
    const Buttons = <View>

    </View>
    return (

        <View style={{ flex: 1, flexDirection: 'row',  /*alignSelf: 'center',*/alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>

            <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: '2%'}}>
                <Pressable
                style={{margin:2}}
                onPress={props.onPress}>
                    <Icon
                        style={{/* alignSelf: "flex-start", */marginHorizontal: 15/* ,backgroundColor:'#ffa457'*/ }}
                        name='angle-left'
                        type='font-awesome'
                        size={20}
                        color={'black'}

                    />
                </Pressable>
            </View>
            <View style={{ flex: 1,  /*alignItems: 'center', */alignItems: 'center' }}>
                <Text style={styles.textStyle}>{props.screenName}</Text>
            </View>

            <View style={{ flex: 1, /*alignItems: 'center', *//*alignItems: 'flex-end',*/ }}>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 13,
        fontWeight: '500',
        color: 'black',
    },
    navBar: {
        backgroundColor: 'white',
        flex: 1,
        //width: '100%',
        //height:'100%',
        /* marginLeft: '3%',
         marginRight: '3%',*/
        /*marginTop:'3%'
        */
        //justifyContent: 'center',
        //alignItems: 'center',
        // borderBottomEndRadius:15,
        // borderBottomStartRadius:15
    },
});

export default Navigation;