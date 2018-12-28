import React, {Component} from 'react';
import {Text, View,ScrollView} from 'react-native';
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
            <Text
              style={styles.title_text}
            >
              Assists
            </Text>
          </View>
          <View style={styles.opt_view}>
            <Text
              style={styles.opt_text}
            >
              Highlight same digits
            </Text>
            <View style={styles.opt_button_view}>
              <Text style={styles.white}>ON</Text>
            </View>
          </View>
          <View style={styles.opt_view}>
            <Text
            style={styles.opt_text}
            >
              Show remaining digit count
            </Text>
            <View style={styles.opt_button_view}>
              <Text style={styles.white}>ON</Text>
            </View>
          </View>
          <View style={styles.opt_view}>
            <Text
            style={styles.opt_text}
            >
              Automatic pencil value removal
            </Text>
            <View style={styles.opt_button_view}>
              <Text style={styles.white}>ON</Text>
            </View>
          </View>
        </ScrollView>;
  };
};