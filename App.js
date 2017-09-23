import React from 'react';
import { Button, StyleSheet, Text, View, AppRegistry, Image, Alert, NavigatorIOS} from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as GLOBAL from './Globals';

GLOBAL.COINS = 0;

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

            <View style={styles.container}>
                <Image source={require('./10080.png')} style={{width:150, height:150,marginBottom:20}}/>
                <Text style={styles.text}>Coin Clicker</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="START"
                    color="white"
                />
            </View>
        );


    }
}


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: 9,
        }
        setInterval(() => {
            this.setState({
                coins: this.state.coins + 1
            });
        }, 1000);
    }

    render() {
        return (
            <Text style={styles.text}>{this.state.coins} MONEYS</Text>
        );
    }
}

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Clock />
                <Button
                    onPress={() => navigate('Store')}
                    title="STORE"
                    color="white"
                />
            </View>
        );
    }
}

class Store extends React.Component {
    static navigationOptions = {
        title: 'Store',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container2}>
                < Clock/>
                <Image source={require('./firstchar.png')} style={{width:50, height:50,marginBottom:20,marginLeft:13}}/>
                <Button
                    onPress={() => navigate('Store')}
                    title="Hire One Worker"
                    color="grey"
                    style={styles.hireText}
                />
                {/*<Text style={styles.hireText}>Hire One Worker</Text>*/}
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ProfileScreen },
    Store: { screen: Store },
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
        flexDirection: 'row',
        //justifyContent: 'center',
        //alignItems: 'center',
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

    },

    hireText: {
        paddingTop:13,
        paddingLeft:13,
        fontSize: 20,
        color: 'grey',
        fontFamily: 'Avenir-Black',
        //fontWeight: '700'
    }


});
