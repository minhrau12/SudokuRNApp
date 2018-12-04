/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View, Image, TouchableNativeFeedback} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Icon, Button} from 'react-native-elements';

import styles from './styles';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};

class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home Screen",
        header: null,
    };

    render() {
        return (
            <View style={styles.home}>
                <View style={{
                    padding: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start"
                }}>
                    <Icon name='chevron-left' color='#f50' style={{fontSize: 20,fontWeight:"500"}}/>
                    <Text style={{fontSize: 15,color:"#fff"}}>Ambra</Text>
                    <Icon name='chevron-right' color='#f50' style={{fontSize: 20,fontWeight:"500"}}/>
                </View>
                <View style={{marginTop: 50,justifyContent:"center",alignSelf:"center",padding: 10}}>
                    <Image source={require("./assets/logo.png")}
                           style={{justifyContent: "center", alignItems: "center", width: 150, height: 150}}/>
                </View>
                <View style={{padding: 20, flexDirection: "row", justifyContent: "space-around",alignItems:"center"}}>
                    <Icon name='chevron-left' color='#f50' style={{fontSize: 20,fontWeight:"500"}} onPress={()=>{}}/>
                    <Text style={{fontSize: 15,color:"#fff"}}>Easy</Text>
                    <Icon name='chevron-right' color='#f50' style={{fontSize: 20,fontWeight:"500"}} onPress={()=>{}}/>
                </View>
                <TouchableNativeFeedback
                    onPress={() => this.props.navigation.push('Detail')}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{height: 50, width: "80%",borderColor:"#fff",borderRadius:20,borderWidth: 1,justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
                        <Text style={{fontSize: 15,fontWeight:"300",color:"#fff"}}>New Game</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={{width: "100%",marginTop: 30,position:"absolute",bottom: 0}}>
                    <View style={{margin: 10,padding: 10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                        <Icon name='cog' type='font-awesome' color='#fff' onPress={()=> this.props.navigation.push('Setting')}/>
                        <Icon name='social-github' type='foundation' color='#fff' onPress={()=> this.props.navigation.push('Github')}/>
                        <Icon name='list' type='font-awesome' color='#fff' onPress={()=> this.props.navigation.push('List')}/>
                        <Icon name='info-circle' type='font-awesome' color='#fff' onPress={()=> this.props.navigation.push('Info')}/>
                    </View>
                </View>
            </View>
        );
    }
}

class DetailsScreen extends Component {
    static navigationOptions = {
        title: "Detail Screen",
        header: null,
    };

    render() {
        return (
            <View style={styles.detail}>
                <Text>Details Screen</Text>
                <Button title={"Detail"} onPress={() => this.props.navigation.push('Detail')}/>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
                />
            </View>
        );
    }
}

//Routing
const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Detail: DetailsScreen,
    });

const AppContainer = createAppContainer(RootStack);

//Main class
export default class App extends Component<Props> {
    render() {
        return <AppContainer/>;
    }
}
