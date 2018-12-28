import React, {Component} from 'react';
import {Text, View,ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {_} from 'lodash';
import styles from "./styles";

export default class GameplayScreen extends Component {
    constructor(){
        super();
    }
    static navigationOptions = {
        title:"Assists",
        header:null,
    };
    render(){
        return(
            <ScrollView style={styles.scrollview}>
                <View style={styles.color_change_view}>
                    <Icon name='chevron-left' color='#f50' style={styles.color_change_chevron}/>
                    <Text style={styles.color_change_text}>Ambra</Text>
                    <Icon name='chevron-right' color='#f50' style={styles.color_change_chevron}/>
                </View>
                <View style={styles.title_view}>
                    <Text style={styles.title_text}>Gameplay Settings</Text>
                </View>
                <View style={styles.opt_view}>
                    <Text style={styles.opt_text}>On-board animations</Text>
                    <View style={styles.opt_button_view}>
                        <Text style={styles.white}>ON</Text>
                    </View>
                </View>
                <View style={styles.opt_view}>
                    <Text style={styles.opt_text}>Time counter</Text>
                    <Text style={styles.opt_2nd_text}>If this is disabled, there is no more room for the game controls. Time will be seen when game ends both ways.</Text>
                    <View style={styles.opt_button_view}>
                        <Text style={styles.white}>ON</Text>
                    </View>
                </View>
                <View style={styles.opt_view}>
                    <Text style={styles.opt_text}>Distinguish locked cells</Text>
                    <Text style={styles.opt_2nd_text}>Turn this off for even cleaner look for your sudoku board.</Text>
                    <View style={styles.opt_button_view}>
                        <Text style={styles.white}>ON</Text>
                    </View>
                </View>
                <View style={styles.opt_view}>
                    <Text style={styles.opt_text}>Double-tap erase</Text>
                    <View style={styles.opt_button_view}>
                        <Text style={styles.white}>ON</Text>
                    </View>
                </View>
            </ScrollView>
        );
    };
};