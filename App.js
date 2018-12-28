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
import Modal from 'react-native-modal';

import styles from './src/styles';
import SettingsScreen from './src/setting/settings';
import HistoryScreen from './src/history/history';
import GameScreen from './src/game/game';
import AssistScreen from './src/assists/assists';
import GameplayScreen from './src/gameplay/gameplay';
import ThemesScreen from './src/themes/themes';

const {widthScr,heightScr} = Dimensions.get("window");
console.log(widthScr,heightScr);

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
                <View style={styles.color_change_view}>
                    <Icon name='chevron-left' color='#f50' style={styles.color_chane_chevron}/>
                    <Text style={styles.color_change_text}>Ambra</Text>
                    <Icon name='chevron-right' color='#f50' style={styles.color_chane_chevron}/>
                </View>
                <View style={styles.logo_view}>
                    <Image source={require("./assets/logo.png")}
                           style={styles.logo_image}/>
                </View>
                <View style={styles.mode_view}>
                    <Icon name='chevron-left' color='#f50' style={styles.color_chane_chevron} onPress={()=>{}}/>
                    <Text style={styles.color_change_text}>Easy</Text>
                    <Icon name='chevron-right' color='#f50' style={styles.color_chane_chevron} onPress={()=>{}}/>
                </View>
                <TouchableNativeFeedback
                    onPress={() => this.props.navigation.push('Game')}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.new_game_button_view}>
                        <Text style={styles.new_game_button_text}>New Game</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.bottom_button_view}>
                    <View style={styles.bottom_item_view}>
                        <Icon name='cog' type='font-awesome' color='#fff' onPress={()=> this.props.navigation.push('Setting')}/>
                        <Icon name='social-github' type='foundation' color='#fff' onPress={()=> this.props.navigation.push('Github')}/>
                        <Icon name='list' type='font-awesome' color='#fff' onPress={()=> this.props.navigation.push('History')}/>
                        <Icon name='info-circle' type='font-awesome' color='#fff' onPress={this._toggleInfoModal}/>
                    </View>
                </View>
                <Modal isVisible={this.state.infoModalVisible}>
                    <View style={styles.info_modal_view}>
                        <View>
                            <View style={styles.info_modal_logo_view}>
                                <Image source={require("./assets/logo.png")}
                                       style={styles.info_modal_logo_image}/>
                            </View>
                            <View style={styles.info_modal_title_view}>
                                <Text style={styles.info_modal_title_text}>Sudoku React Native App</Text>
                                <Text style={styles.info_modal_title_text}>Design by me.</Text>
                            </View>
                            <TouchableOpacity onPress={this._toggleInfoModal}>
                                <View style={styles.info_modal_button_view}>
                                    <Text style={styles.info_modal_button_text}>Close.</Text>
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
        Assist: AssistScreen,
        Gameplay: GameplayScreen,
        Themes: ThemesScreen,
    },
    {
        initialRouteName: 'Home',
    });

const AppContainer = createAppContainer(RootStack);

//Main class
export default class App extends Component {
    render() {
        return <AppContainer/>;
    }
}
