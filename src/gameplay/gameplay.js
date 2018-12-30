import React, {Component} from 'react';
import {Text, View,ScrollView,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {_} from 'lodash';
import styles from "./styles";

export default class GameplayScreen extends Component {
    constructor(){
        super();
        this.state = {
            on_board: true,
            time_counter: true,
            distinguish_cells: true,
            doubletap_erase: true,
        };
    }
    static navigationOptions = {
        title:"Assists",
        header:null,
    };
    render(){
        return <ScrollView style={styles.scrollview}>
            <View style={styles.color_change_view}>
              <Icon name="chevron-left" color="#f50" style={styles.color_change_chevron} />
              <Text style={styles.color_change_text}>Ambra</Text>
              <Icon name="chevron-right" color="#f50" style={styles.color_change_chevron} />
            </View>
            <View style={styles.title_view}>
              <Text style={styles.title_text}>Gameplay Settings</Text>
            </View>
            <View style={styles.opt_view}>
              <Text style={styles.opt_text}>On-board animations</Text>
              <TouchableOpacity onPress={() => this.setState({
                    on_board: !this.state.on_board
                  })}>
                <View style={[styles.opt_button_view, this.state.on_board && styles.opt_button_view_on]}>
                  <Text
                    style={[
                      styles.white,
                      this.state.on_board && styles.black
                    ]}
                  >
                    {this.state.on_board ? 'ON' : 'OFF'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.opt_view}>
              <Text style={styles.opt_text}>Time counter</Text>
              <Text style={styles.opt_2nd_text}>
                If this is disabled, there is no more room for the game
                controls. Time will be seen when game ends both ways.
              </Text>
              <TouchableOpacity onPress={()=>this.setState({time_counter:!this.state.time_counter})}>
                <View style={[styles.opt_button_view,this.state.time_counter && styles.opt_button_view_on]}>
                  <Text style={[styles.white,this.state.time_counter && styles.black]}>{this.state.time_counter ? 'ON' : 'OFF'}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.opt_view}>
              <Text style={styles.opt_text}>
                Distinguish locked cells
              </Text>
              <Text style={styles.opt_2nd_text}>
                Turn this off for even cleaner look for your sudoku
                board.
              </Text>
              <TouchableOpacity onPress={()=>this.setState({distinguish_cells: !this.state.distinguish_cells})}>
                <View style={[styles.opt_button_view, this.state.distinguish_cells && styles.opt_button_view_on]}>
                    <Text style={[styles.white,this.state.distinguish_cells && styles.black]}>{this.state.distinguish_cells ? 'ON' : 'OFF'}</Text>
                </View>
            </TouchableOpacity>
            </View>
            <View style={styles.opt_view}>
              <Text style={styles.opt_text}>Double-tap erase</Text>
              <TouchableOpacity onPress={()=>this.setState({doubletap_erase: !this.state.doubletap_erase})}>
              <View style={[styles.opt_button_view,this.state.doubletap_erase && styles.opt_button_view_on]}>
                <Text style={[styles.white,this.state.doubletap_erase && styles.black]}>{this.state.doubletap_erase ? 'ON' : 'OFF'}</Text>
              </View>
                </TouchableOpacity>
            </View>
          </ScrollView>;
    };
};