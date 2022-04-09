import React, { useState } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./style";
import { ScrollView, Keyboard, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { ButtonGroup, SearchBar, Button, Icon, Divider } from 'react-native-elements';
import Restaurantscard from "../components/Restaurantscard";
import Searchbar from "../components/Searchbar";


const RestaurantsScreen = ({ navigation }) => {
    const [texts, setTexts] = useState('');
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [selectedUpperIndex, setSelectedUpperIndex] = useState(0);
    const [selectedDownerIndex, setSelectedDownerIndex] = useState(0);
    const [selectedIndexes, setSelectedIndexes] = useState([0]);
    const component1 = () => <Icon name="home" type='font-awesome-5' color={selectedDownerIndex === 0 ? '#ffa457' : '#000'} />;
    const component2 = () => <Icon name="shopping-cart" type='font-awesome-5' color={selectedDownerIndex === 1 ? '#ffa457' : '#000'} />;

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ borderRadius: 10, backgroundColor: 'white', flex: 2 }}>

                <Searchbar />
                <ButtonGroup

                    buttonContainerStyle={{ backgroundColor: 'white', borderColor: 'white', justifyContent: 'center', flexDirection: 'row', maxWidth: '38%' }}
                    selectedButtonStyle={{ backgroundColor: 'white', borderColor: 'white' }}
                    selectedTextStyle={{ color: '#ffa457' }}
                    buttons={['Orders', 'Offers']}
                    selectedIndex={selectedUpperIndex}
                    onPress={(value) => {
                        setSelectedUpperIndex(value);
                    }}
                    textStyle={{ fontSize: 14 }}
                    containerStyle={{ borderColor: 'white', marginBottom: 0, justifyContent: 'center', flexDirection: 'row' }}

                />

            </View>
            <View style={{ flex: 10 }}>
                <ScrollView style={{ backgroundColor: '#f7f7f7'}}>
                    <Restaurantscard />
                    <Restaurantscard />
                    <Restaurantscard />
                    <Restaurantscard />
                    <Restaurantscard />
                </ScrollView>
            </View>
            <View style={{ borderColor:'#c7c8c6',borderWidth:1,borderTopLeftRadius: 10,borderTopRightRadius: 10, backgroundColor: 'white', flex: 1 }}>

                <ButtonGroup

                    buttonContainerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', justifyContent: 'center', flexDirection: 'row', maxWidth: '38%' }}
                    selectedButtonStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    selectedTextStyle={{ color: '#ffa457' }}
                    buttons={[{ element: component1 }, { element: component2 }]}
                    selectedIndex={selectedDownerIndex}
                    onPress={(value) => {
                        setSelectedDownerIndex(value);
                    }}
                    textStyle={{ fontSize: 14 }}
                    containerStyle={{ borderColor: 'transparent', marginBottom: 0, justifyContent: 'center', flexDirection: 'row', }}
                />
            </View>

        </View>
    );
}



export default RestaurantsScreen;
