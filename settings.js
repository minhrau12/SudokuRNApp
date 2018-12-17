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
            <View style={styles.settings}>
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
                <View style={{marginTop: 20,marginBottom: 40, justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize: 20, color:"#fff",fontWeight:"300"}}>Settings</Text>
                </View>
                <View style={{alignItems:"center"}}>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.push('Assist')}>
                        <View style={{width:"70%", height: 50, marginTop: 10, marginBottom: 10,flexDirection:"row",justifyContent:"center",alignItems:"center",borderWidth: 1,borderRadius: 25,borderColor:"#fff"}}>
                            <Icon name='puzzle-piece' type='font-awesome' color='#fff'/>
                            <Text style={{paddingLeft: 20,fontSize: 15,color:"#fff"}}>Assists</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.push('Gameplay')}>
                        <View style={{width:"70%", height: 50, marginTop: 10, marginBottom: 10, flexDirection:"row",justifyContent:"center",alignItems:"center",borderWidth: 1,borderRadius: 25,borderColor:"#fff"}}>
                            <Icon name='gamepad' type='font-awesome' color='#fff'/>
                            <Text style={{paddingLeft: 20, fontSize: 15,color:"#fff"}}>Gameplay</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.props.navigation.push('Themes')}>
                        <View style={{width:"70%", height: 50, marginTop: 10, marginBottom: 10, flexDirection:"row",justifyContent:"center",alignItems:"center",borderWidth: 1,borderRadius: 25,borderColor:"#fff"}}>
                            <Icon name='camera-retro' type='font-awesome' color='#fff'/>
                            <Text style={{paddingLeft: 20,fontSize: 15,color:"#fff"}}>Themes</Text>
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