

 // Component below is combined with the Home component at /Source/component/Home.js //


// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import Home from './Home.js';

// class GeolocationExample extends Component {
//   constructor(props) {
//     super(props);

//     var myFirebaseRef = new Firebase('https://driverslocation-99be9.firebaseio.com/')
//     myFirebaseRef.set({
//       title:'Helelo',
//       author:'Ahmed'
//     }),

//     this.state = {
//       latitude: null,
//       longitude: null,
//       error: null,
//     };
//   }


  
//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           error: null,

//         });
//       },

//       (error) => this.setState({ error: error.message }),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//     );
//   }

//   render(){
      
//     return (
//       <View style={{ flexGrow: 3, alignItems: 'baseline', justifyContent: 'center' }}>

//          <Text>Latitude: {this.state.latitude}</Text>
//         <Text>Longitude: {this.state.longitude}</Text>
        

//         {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
//       </View>
//     );
//   }
// }

// export default GeolocationExample;






// var React = require('react-native');

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View, 
//   ListView, TouchableHighlight,
//   TextInput,
//   AppRegistry,
//   Component
// } from 'react-native';

// var Firebase = require('firebase');

// class GeolocationExample extends Component{
//   constructor(props) {
//     super(props);
//     var myFirebaseRef = new Firebase('https://driverslocation-99be9.firebaseio.com/');
//     myFirebaseRef.set({
//       title:'Helelo',
//       author:'Ahmed'
//     })
//   } 
// }

// export default GeolocationExample;