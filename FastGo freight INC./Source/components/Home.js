
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, 
SafeAreaView, TextView, AppRegistry} from 'react-native';
import * as firebase from 'firebase';

// Firebase configuration //
const firebaseConfig = {
  apiKey: "AIzaSyDZcmyEgaWH3kjFbTu-aIvNNaSwf0WxQrw",
  authDomain: "driversgeolocation.firebaseapp.com",
  databaseURL: "https://driversgeolocation.firebaseio.com",
  projectId: "driversgeolocation",
  storageBucket: "driversgeolocation.appspot.com",
  messagingSenderId: "1016377425960"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);

class Inputs extends Component{
  // initializing state //
   state = {
      firstName: '',
      lastName: '',
      truckModel: '',
      shipmentLoad:'',
      phoneNumber:'',
    }
// setting the state //
   handlefirstName  = (text) => { this.setState({ firstName: text })};
   handlelastName    = (text) => { this.setState({ lastName: text })};
   handletruckModel  = (text) => { this.setState({ truckModel: text })};
   handleshipmentLoad = (text) => {this.setState({ shipmentLoad: text } )};
   handlephoneNumber = (text) => {this.setState({ phoneNumber: text })};

constructor(props) {
  super(props);

  this.state = {
    latitude: null,
    longitude: null,
    error: null,
  };

  // this.itemsRef = this.getRef('driversLog');
  this.itemsRef = this.getRef().child('driversLog');
}

getRef(){
  return firebaseApp.database().ref();
}

componentDidMount() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,

      });
    },

    (error) => this.setState({ error: error.message }),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
}

// render stage //
   render(){
      return (
        
        
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               placeholder = "  First name "
               onChangeText = {this.handlefirstName}/>

            <TextInput style = {styles.input}
               placeholder = "  Last name"
               onChangeText = {this.handlelastName}/>

            <TextInput style = {styles.input}
               placeholder = "  Truck model"
               onChangeText = {this.handletruckModel}/>

            <TextInput style = {styles.input}
               placeholder = "  Shippment load"
               onChangeText = {this.handleshipmentLoad}/>

            <TextInput style = {styles.input}
               placeholder = "  Phone number"
               onChangeText = {this.handlephoneNumber}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () =>  (
                    alert('Info saved to API'),

                    
                    // ,

                    this.itemsRef.push({
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        truckModel: this.state.truckModel,
                        shipmentLoad:this.state.shipmentLoad,
                        phoneNumber: this.state.phoneNumber,
                        latitude: this.state.latitude,
                        longitude: this.state.longitude
                    })
                  )
                  
               }>
               

            <Text style = {styles.submitButtonText} > Submit </Text>
            </TouchableOpacity>
            <Text>  First name: {this.state.firstName}</Text>
            <Text>  Last name: {this.state.lastName}</Text>
            <Text>  Truck Model: {this.state.truckModel}</Text>
            <Text>  Shippment load: {this.state.shipmentLoad}</Text>
            <Text>  Phone number: {this.state.phoneNumber}</Text>

            <Text style={styles.latAndLang}>  Latitude: {this.state.latitude}</Text>
            <Text style={styles.latAndLang}>  Longitude load: {this.state.longitude}</Text>
            
            {this.state.error ? <Text>Error: {this.state.error}</Text> : null}

         </View>

      )
   }
}


export default Inputs;

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
   },
   input: {
      color:'#7a42f4',
      margin: 15,
      height: 40,
      borderColor: 'lightgreen',
      borderWidth: 1
   },

   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },

   submitButtonText:{
      color: 'white'
   },

   latAndLang:{
    color: '#7a42f4'
   }

})
