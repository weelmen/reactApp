const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
  backgroundColor :"#f6f5f3"
},
logoText: {
  fontSize: 40,
  fontWeight: "800",
 // marginTop: 5,
  marginBottom: 30,
  textAlign: 'center',
},
smallText: {
  fontSize: 12,
  fontWeight: "300",
  marginTop: 10,
  marginBottom: 15,
  paddingLeft:30,
  textAlign: 'left',
},
smallText2: {
  fontSize: 12,
  fontWeight: "300",
  marginTop: 10,
  marginBottom: 15,
  marginLeft: 25,
  textAlign: 'center',
},
resetText: {
  fontSize: 12,
  fontWeight: "300",
  color: '#ffbdbd',
  marginTop: 10,
  marginBottom: 15,
  marginLeft: 25,
  textAlign: 'left',
},
loginFormView: {
  flex: 1
},
loginFormTextInput: {
  
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,
  

},
loginButton: {
  backgroundColor: '#ffa457',
  borderRadius: 5,
  height: 45,
  marginLeft: 30,
  marginRight: 30,
  marginTop: 10,
},
fbLoginButton: {
  borderColor: '#eaeaea',
  height: 45,
  marginTop: 10,
  backgroundColor: 'transparent',
},


//------------------------------------------------------
searchSection: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
},
searchIcon: {
  padding: 10,
},
input: {
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 10,
  paddingRight: 10,
  paddingBottom: 10,
  paddingLeft: 0,
  backgroundColor: '#ffffff',
  color: '#424242',
},
inputContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: 43,
  fontSize: 14,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: '#eaeaea',
  backgroundColor: '#ffffff',
  paddingLeft: 3,
  paddingRight:10,
  marginLeft: 30,
  marginRight: 30,
  marginTop: 5,
  marginBottom: 5,
},
inputView: {
  height: 40,
  borderBottomWidth: 1,
  borderBottomColor: '#fff',
  marginTop: 10,
  marginHorizontal: 20,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
},
vertical: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  height: '70%'
},
tinyLogo: {
  width: 50,
  height: 50,
  alignItems: 'center',
},
};