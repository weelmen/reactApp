import React, { useState } from "react";
import { ScrollView, View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
/*
const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f632",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d723",
        title: "Third Item",
    },
];*/
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
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
        <View style={{


        }}>
            <View style={[styles.container,{}]}>
                <ScrollView horizontal>
                    {props.Data.map((item, id) => {
                        return (
                            <View>

                                <RenderItem item={item} />
                            </View>
                        );

                    })}

                </ScrollView>

            </View>




        </View>
    )

}



export default ButtonsGroup

const styles = StyleSheet.create({
    container: {
        //  flex: 1,
        marginLeft:10,
        marginTop:0 //StatusBar.currentHeight || 0,
    },
    item: {
        padding: 5,
        marginVertical: 0,
        marginHorizontal: 1,
       
       
    },
    title: {
        fontSize: 16,
    },
});