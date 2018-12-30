import React, {Component} from 'react';
import {Text, View,ScrollView,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {_} from 'lodash';
import styles from "./styles";

export default class AssistScreen extends Component {
  constructor(){
      super();
      this.state = {
          same_digit : true,
          remaining : true,
          value_removal : true,
      };
  }
  static navigationOptions = {
      title:"Assists",
      header:null,
  };
  render(){
      return <ScrollView style={styles.scrollview}>
          <View style={styles.wholeview}>
            <Icon name="chevron-left" color="#f50" style={styles.chevron_style} />
            <Text style={styles.color_change_style}>Ambra</Text>
            <Icon name="chevron-right" color="#f50" style={styles.chevron_style} />
          </View>
          <View style={styles.title_view}>
            <Text style={styles.title_text}>Assists</Text>
          </View>
          <View style={styles.opt_view}>
            <Text style={styles.opt_text}>Highlight same digits</Text>
            <TouchableOpacity onPress={() => this.setState({
                  same_digit: !this.state.same_digit
                })}>
              <View style={[styles.opt_button_view, this.state.same_digit && styles.opt_button_view_on]}>
                <Text
                  style={[
                    styles.white,
                    this.state.same_digit && styles.black
                  ]}
                >
                  {this.state.same_digit ? 'ON' : 'OFF'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.opt_view}>
            <Text style={styles.opt_text}>
              Show remaining digit count
            </Text>
            <TouchableOpacity onPress={() => this.setState({
                  remaining: !this.state.remaining
                })}>
              <View style={[styles.opt_button_view, this.state.remaining && styles.opt_button_view_on]}>
                <Text
                  style={[
                    styles.white,
                    this.state.remaining && styles.black
                  ]}
                >
                  {this.state.remaining ? 'ON' : 'OFF'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.opt_view}>
            <Text style={styles.opt_text}>
              Automatic pencil value removal
            </Text>
            <TouchableOpacity onPress={()=>this.setState({value_removal: !this.state.value_removal})}>
              <View style={[styles.opt_button_view,this.state.value_removal && styles.opt_button_view_on]}>
                <Text style={[styles.white,this.state.value_removal && styles.black]}>{this.state.value_removal ? 'ON' : 'OFF'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>;
  };
};