/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, Text, View, Image, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Icon, Button} from 'react-native-elements';
import {_}from 'lodash';
import Modal from 'react-native-modal';

import styles from './styles';
import SettingsScreen from './settings';
import HistoryScreen from './history';
import GameScreen from './game';

type Props = {};

const {widthScr,heightScr} = Dimensions.get("window");

class HomeScreen extends Component {
    constructor(){
        super();
        this.state = {
            infoModalVisible: false,
        };
    };

    static navigationOptions = {
        title: "Home Screen",
        header: null,
    };

    _toggleInfoModal = () => this.setState({ infoModalVisible: !this.state.infoModalVisible});

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
                    onPress={() => this.props.navigation.push('Game')}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{height: 50, width: "80%",borderColor:"#fff",borderRadius:25,borderWidth: 1,justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
                        <Text style={{fontSize: 15,fontWeight:"300",color:"#fff"}}>New Game</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={{flex:1,justifyContent:"flex-end",alignItems:"center"}}>
                    <View style={{width: "80%",margin: 10,padding: 10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                        <Icon name='cog' type='font-awesome' color='#fff' onPress={()=> this.props.navigation.push('Setting')}/>
                        <Icon name='social-github' type='foundation' color='#fff' onPress={()=> this.props.navigation.push('Github')}/>
                        <Icon name='list' type='font-awesome' color='#fff' onPress={()=> this.props.navigation.push('History')}/>
                        <Icon name='info-circle' type='font-awesome' color='#fff' onPress={this._toggleInfoModal}/>
                    </View>
                </View>
                <Modal isVisible={this.state.infoModalVisible}>
                    <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"#333",borderWidth: 2,borderRadius: 10,borderColor:"#666"}}>
                        <View>
                            <View style={{marginTop: 20,justifyContent:"center",alignSelf:"center",padding: 10}}>
                                <Image source={require("./assets/logo.png")}
                                       style={{justifyContent: "center", alignItems: "center", width: 100, height: 100}}/>
                            </View>
                            <View style={{alignItems:"center",margin: 10, padding: 10}}>
                                <Text style={{fontSize: 20, color: "#fff"}}>Sudoku React Native App</Text>
                                <Text style={{fontSize: 15, color: "#fff"}}>Design by me.</Text>
                            </View>
                            <TouchableOpacity onPress={this._toggleInfoModal}>
                                <View style={{height: 50, margin: 10, padding: 10, justifyContent:"center",alignItems:'center',borderWidth:1,borderRadius: 10, borderColor:"#666"}}>
                                    <Text style={{fontSize: 15, color: "#fff"}}>Close.</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

//Routing
const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Setting: SettingsScreen,
        History:HistoryScreen,
        Game:GameScreen,
    },
    {
        initialRouteName: 'Home',
    });

const AppContainer = createAppContainer(RootStack);

//Main class
export default class App extends Component<Props> {
    render() {
        return <AppContainer/>;
    }
}
