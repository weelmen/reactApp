import React, { useContext, useState } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';

import { ScrollView, Keyboard, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { ButtonGroup, Icon } from 'react-native-elements';
import Restaurantscard from "../components/Restaurantscard";
import Searchbar from "../components/Searchbar";
import ButtonsGroup from "../components/ButtonsGroup";
import NavBar from "../components/Navbar";
import { fakerestaurantsdata } from "../api-json-server/fakedata.json";
import  {GlobalContext} from "../store/globalContext"
const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Reastaurants",
        default: true
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Special offers",
        default: false
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Favorites",
        default: false
    },

];



const RestaurantsScreen = ({ navigation }) => {
    const [selectedUpperIndex, setSelectedUpperIndex] = useState(0);
    const [selectedDownerIndex, setSelectedDownerIndex] = useState(0);
    const profile = useContext(GlobalContext);

    const component1 = () => <Icon name="home" type='font-awesome-5' color={selectedDownerIndex === 0 ? '#6256fb' : '#e5e5e5'} />;
    const component2 = () =>
        <View>
            <Icon name="shopping-cart" type='font-awesome-5' color={selectedDownerIndex === 1 ? '#6256fb' : '#e5e5e5'} />
            <View style={{ position: 'absolute',/* flexDirection:'column'*/ }}>
                <View style={{
                    //  alignItems: 'flex-start',
                    // alignContent:'flex-start',
                    height: 17,
                    width: 17,
                    borderRadius: 30,
                    borderColor: '#6256fb',
                    borderWidth: 1,
                    // alignSelf: 'flex-start',
                    marginTop: -5,

                    backgroundColor: 'white',
                    /* position: 'absolute'*/
                }}><Text style={{ fontSize: 16, alignSelf: 'center', marginTop: -3 }}>7</Text>

                </View>


            </View>
        </View>
        ;

    return (
        <View style={{ flex: 1, backgroundColor: '#fcfcfc' }}>
            <View style={{ height: '7%' }}>
                <NavBar
                cart={profile.Profile.cart}
                imagesrc={profile.Profile.profileimg}
                />
            </View>
            <ButtonsGroup
                Data={DATA}
                selected={DATA[0].id}

            />
 

            <View style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: '#fcfcfc' }}>
                 
                
                    <Searchbar />
                    
                    <View>
                        {fakerestaurantsdata.map(item => {
                            return (
                                <Restaurantscard showimage key={item.id} imagesrc={item.imagesrc} restaurantName={item.restaurantname} onPress={()=>console.log(profile.Profile.title)/*navigation.navigate('Menus Screen')*/} />
                            );
                        })}
                    </View>

                </ScrollView>
            </View>

            <View style={{ borderColor: '#c7c8c6', borderWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: 'white', }}>

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
 /*<ButtonGroup

           buttonContainerStyle={{ backgroundColor: 'white', borderColor: 'white', justifyContent: 'center', flexDirection: 'row', maxWidth: '38%' }}
           selectedButtonStyle={{ backgroundColor: 'white', borderColor: 'white' }}
           selectedTextStyle={{ color: '#6357ff' }}
           buttons={['Orders', 'Offers']}
           selectedIndex={selectedUpperIndex}
           onPress={(value) => {
               setSelectedUpperIndex(value);
           }}
           textStyle={{ fontSize: 14 }}
           containerStyle={{ borderColor: 'white', marginBottom: 0, justifyContent: 'center', flexDirection: 'row' }}

       />
*/