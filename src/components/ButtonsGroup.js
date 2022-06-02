import React, { useState } from "react";
import { ScrollView, View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor,{}]}>
        <Text style={[styles.title, textColor,{}]}>{item.title}</Text>
    </TouchableOpacity >
);


const ButtonsGroup = (props) => {
    const [selectedId, setSelectedId] = useState(props.selected);
    //const [datas, setData] = useState(props.Data);
    // const [datas, setDatas] = useState(new Array(props.Data.length).fill(props.Data));



    const RenderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "white" : "white";
        const color = item.id === selectedId ? '#6356fb' : '#dbdbdb';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}

            />


        );
    };



    return (
        <View style={{ marginTop:'2%'


        }}>
            {
                props.scroll ? <View style={[styles.container, {borderBottomWidth:1.5,borderBottomColor:'#dbdbdb',borderBottomLeftRadius:10,borderBottomRightRadius:10}]}>
                    <ScrollView horizontal>
                        {props.Data.map((item, id) => {
                            return (
                                <View>

                                    <RenderItem item={item} />
                                </View>
                            );

                        })}

                    </ScrollView>
                </View> :
                    <View style={{ flexDirection: 'row',backgroundColor:'#ffffff',borderBottomWidth:1.5,borderBottomColor:'#dbdbdb',borderBottomLeftRadius:10,borderBottomRightRadius:10/*,justifyContent:'space-between'*//*,backgroundColor:'red'*/}}>
                        {props.Data.map((item, id) => {
                            return (
                                <View style={{flex:1,alignItems:'center'}}>

                                    <RenderItem item={item} />
                                </View>
                            );

                        })}

                    </View>

            }




        </View>
    )

}



export default ButtonsGroup

const styles = StyleSheet.create({
    container: {
        //  flex: 1,
      //  backgroundColor:'#ffffff',
        marginLeft: 10,
        marginTop: 0 //StatusBar.currentHeight || 0,
    },
    item: {
        
        padding: 5,
        marginVertical: 0,
        marginHorizontal: 1,


    },
    title: {
        fontSize: 13,
        fontWeight:'500'
    },
});