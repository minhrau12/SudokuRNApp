import React, {Component} from 'react';
import {Text, View, TouchableNativeFeedback,ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from "./styles";

export default class HistoryScreen extends Component {
    constructor(){
        super()
    }
    static navigationOptions = {
        title: "History Screen",
        header: null,
    };
    render(){
        return(
            <View style={styles.scrollview}>
                <View style={styles.color_change_view}>
                    <Icon name='chevron-left' color='#f50' style={styles.color_change_chevron}/>
                    <Text style={styles.color_change_text}>Ambra</Text>
                    <Icon name='chevron-right' color='#f50' style={styles.color_change_chevron}/>
                </View>
                <View style={styles.title_view}>
                    <Text style={styles.title_text}>Times</Text>
                </View>
                <View style={styles.mode_change_view}>
                    <Icon name='chevron-left' color='#f50' style={styles.color_change_chevron} onPress={()=>{}}/>
                    <Text style={{fontSize: 15,color:"#fff"}}>Beginner</Text>
                    <Icon name='chevron-right' color='#f50' style={styles.color_change_chevron} onPress={()=>{}}/>
                </View>
                <View style={styles.mode_view}>
                    <TouchableNativeFeedback>
                        <View style={styles.mode_item_view}>
                            <Text style={styles.mode_item_text}>Assists:</Text>
                            <View style={styles.mode_level_view}/>
                            <View style={styles.mode_level_view}/>
                            <View style={styles.mode_level_view}/>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={styles.mode_item_view}>
                            <Text style={styles.mode_item_text}>Validation:</Text>
                            <View style={styles.mode_level_view}/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}