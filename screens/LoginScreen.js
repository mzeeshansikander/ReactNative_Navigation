import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class LoginScreen extends Component {

  static navigationOptions = {
    header: null



  }


    render() {
        return (
            <View style={styles.container}>
            <Button title="go to home"
            onPress = {() => this.props.navigation.navigate('Home')}/>



            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
