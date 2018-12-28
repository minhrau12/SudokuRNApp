import React, {Component} from 'react';
import {Text, View,ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {_} from 'lodash';
import styles from "./styles";

export default class ThemesScreen extends Component {
    constructor(){
        super();
        this.state = {
            colors: ["Diletto","Aurum","Ambra","Nennau","Rossa","Alpine","Kawa","Monokai","Laurei"],
            color:{name:"Ambra",color_main:"#333",color_sub:"#e7791f"}
        };
    }
    static navigationOptions = {
        title:"Assists",
        header:null,
    };
    renderColorList = () =>{
      return this.state.colors.map((item)=>{
          return(
              <View key={item} style={styles.history_item_view}>
                  <Text style={styles.history_item_text}>{item}</Text>
                  <View style={styles.history_button_view}>
                      <Text style={styles.white}>ON</Text>
                  </View>
              </View>
          );
      });
    };
    render(){
        return(
            <ScrollView style={styles.scrollview}>
                <View style={styles.color_change_view}>
                    <Icon name='chevron-left' color='#f50' style={styles.color_change_chevron}/>
                    <Text style={{fontSize: 15,color:"#fff"}}>Ambra</Text>
                    <Icon name='chevron-right' color='#f50' style={styles.color_change_chevron}/>
                </View>
                <View style={styles.title_view}>
                    <Text style={styles.title_text}>Theme Settings</Text>
                    <Text style={styles.title_2nd_text}>Here you can choose which themes appears above in the Themes selected.</Text>
                </View>
                {this.renderColorList()}
            </ScrollView>
        );
    };
};