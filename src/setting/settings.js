import React, {Component} from 'react';
import {Platform, Text, View, Image, TouchableNativeFeedback} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import styles from "./styles";

export default class SettingScreen extends Component {
    static navigationOptions = {
        title: "Setting Screen",
        header: null,
    };

    render() {
        return (
            <View style={styles.scrollview}>
                <View style={styles.color_change_view}>
                    <Icon name='chevron-left' color='#f50' style={styles.color_change_chevron}/>
                    <Text style={styles.color_change_text}>Ambra</Text>
                    <Icon name='chevron-right' color='#f50' style={styles.color_change_chevron}/>
                </View>
                <View style={styles.title_view}>
                    <Text style={styles.title_text}>Settings</Text>
                </View>
                <View style={styles.center}>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.push('Assist')}>
                        <View style={styles.setting_button_view}>
                            <Icon name='puzzle-piece' type='font-awesome' color='#fff'/>
                            <Text style={styles.setting_button_text}>Assists</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.push('Gameplay')}>
                        <View style={styles.setting_button_view}>
                            <Icon name='gamepad' type='font-awesome' color='#fff'/>
                            <Text style={styles.setting_button_text}>Gameplay</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.push('Themes')}>
                        <View style={styles.setting_button_view}>
                            <Icon name='camera-retro' type='font-awesome' color='#fff'/>
                            <Text style={styles.setting_button_text}>Themes</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                {/*<Button title={"Settings"} onPress={() => this.props.navigation.push('Setting')}/>*/}
                {/*<Button*/}
                    {/*title="Go to Home"*/}
                    {/*onPress={() => this.props.navigation.navigate('Home')}*/}
                {/*/>*/}
                {/*<Button*/}
                    {/*title="Go back"*/}
                    {/*onPress={() => this.props.navigation.goBack()}*/}
                {/*/>*/}
                {/*<Button*/}
                    {/*title="Update the title"*/}
                    {/*onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}*/}
                {/*/>*/}
            </View>
        );
    }
}