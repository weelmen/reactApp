export const authUser = (user, navigation) => {
    return async dispatch => {
      try {
        let response = await fetch('http://193.168.1.20:3000/fakemenusdatta', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(user),
        });
        let responseJson = await response.json();
        if (responseJson.token == undefined || responseJson.token == null) {
          console.log(responseJson);
          console.log(responseJson.user._id)
          saveItem('id', responseJson.token);
          saveItem('name', responseJson.user._id);
          saveItem('srcimg', responseJson.user.cart);
          dispatch(loginUser(responseJson.user));
          dispatch(hideSpinner());
        //  navigation.replace('Main');
        } else {
          dispatch(hideSpinner());
          Alert.alert(
            'Erreur',
            'Email ou mot de passe incorrect',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
        }
      } catch (ex) {}
    };
  };