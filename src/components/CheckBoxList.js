import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, Pressable, Keyboard, StyleSheet, Image, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollViewComponent } from 'react-native';
import { ButtonGroup, SearchBar, Button, Icon, Divider, Card } from 'react-native-elements';
import CheckBox from "../components/CheckBox";
import { fakechoicedata } from '../api-json-server/fakedata.json'

import { fakechoicedata_test } from '../api-json-server/fakedata.json'
const CheckBoxList = (props) => {
	const [choice, setChoice] = useState(new Array(props.data.items.length).fill(false));
/*	const checkedname = (i) => {
		if (choice[i] === true) return 0
	};*/
	const handleCheck = async (i, price) => {
		// await  setChoice({...choice, [i] : !choice[i]})
		if (choice[i] == true) {
			// console.log(choice)  
			setChoice({ ...choice, [i]: !choice[i] });
			props.total(price, 'minus');
			
		}
		else {
			setChoice({ ...choice, [i]: !choice[i] });
			
			props.total(price, 'plus');
		};
	};

	return (

		<View>
			{props.data.items.map((sub, i) => {
				return (
					<View key={sub.id} >
						<View style={[styles.cardcontainent, { backgroundColor: '#f5f5f5', paddingLeft: 12, paddingRight: 12, paddingBottom: 10, paddingTop: 10 }]}>
							<View style={{

								flex: 1,
								//backgroundColor: "blue"


							}}>
								<CheckBox
									onPress={() => {handleCheck(i, sub.price) }}

									title={sub.name}
									price={sub.price}
									isChecked={choice[i]}
									
								/>
							</View>
						</View>

						<Divider style={{ marginLeft: 12, marginRight: 12 }} color="#ffffff" width={2} />
					</View>


				);
			})}


		</View>

	);
};

export default CheckBoxList;

const styles = StyleSheet.create({
	container: {
		//backgroundColor: 'transparent',
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
		width: 150,
		/*marginTop: 5,
		marginHorizontal: 5,*/
	}, containers: {
		//backgroundColor: 'transparent',
		//justifyContent: "flex-start",
		//alignItems: "center",
		flexDirection: "row",
		//width: 150,
		/*marginTop: 5,
		marginHorizontal: 5,*/
	},
	title: {
		fontSize: 13,
		color: "#000",
		marginLeft: 5,
		fontWeight: "500",
	}, price: {
		fontSize: 13,
		color: "#000",
		marginLeft: 5,
		fontWeight: "500",
	},
});
