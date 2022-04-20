import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
//import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checked from "../icons/check_box_black_24dp.svg"
import Unchecked from "../icons/check_box_outline_blank_black_24dp.svg"
const CheckBox = (props) => {
	const IconName = props.isChecked ?
		Checked : Unchecked;
	const iconColor = props.isChecked ?
		"blue" : "black";

	return (
		
			<Pressable style={styles.containers}
				onPress={props.onPress}>
				<IconName fill={iconColor} />

				<View style={styles.container}>
					<Text style={styles.title}>{props.title}</Text>
				</View>

				<View


					style={{

						flex: 1,
						backgroundColor: 'transparent'


					}}>
					<View style={{
						flexDirection: 'row',
						alignSelf: "flex-end"



					}}><Text style={styles.price}>{props.price}</Text>
					</View>
				</View>
			</Pressable>

	);
};

export default CheckBox;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
		width: 150,
		/*marginTop: 5,
		marginHorizontal: 5,*/
	}, containers: {
		backgroundColor: 'transparent',
		//justifyContent: "flex-start",
		//alignItems: "center",
		flexDirection: "row",
		//width: 150,
		/*marginTop: 5,
		marginHorizontal: 5,*/
	},
	title: {
		fontSize: 14,
		color: "#000",
		marginLeft: 5,
		fontWeight: "500",
	},price: {
		fontSize: 14,
		color: "#000",
		marginLeft: 5,
		fontWeight: "500",
	},
});
