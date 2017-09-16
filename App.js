import React from 'react';
import { Button, StyleSheet, Text, View, AppRegistry, Image, Alert, NavigatorIOS} from 'react-native';
import { StackNavigator } from 'react-navigation';

var coins = 90;

class HomeScreen extends React.Component {


    static navigationOptions = {
        title: 'Home',
    };
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }
    render() {
        const { navigate } = this.props.navigation;
        return (

            //<Image source={pic} style={{width:253, height:190}}/>
            <View style={styles.container}>
                <Image source={require('./10080.png')} style={{width:150, height:150,marginBottom:20}}/>
                <Text style={styles.text}>Coin Clicker</Text>
                {/*<Greeting name='Rexxar' />*/}
                {/*<Greeting name='Jaina' />*/}
                {/*<Greeting name='Valeera' />*/}
                {/*<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />*/}
                <Button
                    onPress={() => navigate('Chat')}
                    title="START"
                    color="white"
                />
            </View>
        );


    }
}

// function myFunction() {
//     // while(true) {
//     //     coins += 1;
//     // }
//     document.getElementById("demo").innerHTML = "Current Balance: {coins}";
//     return coins;
// }

class ProfileScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            myText: 'My Original Text'
        }
    }
    updateText = () => {
        this.setState({myText: 'My Changed Text'})
    }
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container2}>
                <Text onPress = {this.updateText}>
                    {this.state.myText}
                </Text>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ProfileScreen },
});

export default class App extends React.Component {
    render() {
        return (
                <SimpleApp/>

        );
    }
}
//
const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue'
    },
    container2: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    red: {
        color: 'red',
    },

    text: {
        fontSize: 40,
        color: 'white',
        fontFamily: 'Avenir-Black',
        //fontWeight: '700'

    }
});

// // export default class App extends React.Component {
// //     _onPressButton() {
// //         Alert.alert('You tapped the button!')
// //     }
// //   render() {
// //     // return (
// //       //   <View style={styles.container}>
// //       //     <Text>Ope working on your app!</Text>
// //       //     <Text>Changes you make will automatically reload.</Text>
// //       //     <Text>Shake your phone to open the developer menu.</Text>
// //       //   </View>
// //       // );
// //
// //       return (
// //           //<Image source={pic} style={{width:253, height:190}}/>
// //           <View style={styles.container}>
// //               <Image source={require('./10080.png')} style={{width:150, height:150,marginBottom:20}}/>
// //               <Text style={styles.text}>Coin Clicker</Text>
// //               {/*<Greeting name='Rexxar' />*/}
// //               {/*<Greeting name='Jaina' />*/}
// //               {/*<Greeting name='Valeera' />*/}
// //               {/*<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />*/}
// //               <Button
// //                   onPress={this._onPressButton}
// //                   title="START"
// //                   color="white"
// //                   accessibilityLabel="Learn more about this purple button"
// //               />
// //           </View>
// //       );
// //
// //
// //   }
// // }
//