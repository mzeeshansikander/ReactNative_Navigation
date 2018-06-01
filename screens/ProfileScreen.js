import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    
} from "react-native";


export default class LoginScreen extends Component {

    render() {
        return (
        


            <View style={styles.container}>
            <Text style={styles.header}> Welcome to member area </Text>

            </View>
            
          


            
        );
    }
   
}
const styles = StyleSheet.create({
      container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#2896d3',
        paddingLeft: 40,
        paddingRight: 40

    },
    header:{
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold'
    },
  

})

