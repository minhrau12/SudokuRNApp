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
              <View key={item} style={{alignItems:"center",margin: 5,padding: 5}}>
                  <Text style={{fontSize: 13,color:"#fff",textAlign:"center",paddingBottom: 5}}>{item}</Text>
                  <View style={{width: 70,height: 70,borderWidth:1,borderRadius:100,justifyContent:"center",alignItems:"center"}}>
                      <Text style={{color:"#fff"}}>ON</Text>
                  </View>
              </View>
          );
      });
    };
    render(){
        return(
            <ScrollView style={{flex:1,backgroundColor:"#333"}}>
                <View style={{
                    padding: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start"
                }}>
                    <Icon name='chevron-left' color='#f50' style={{fontSize: 20,fontWeight:"500"}}/>
                    <Text style={{fontSize: 15,color:"#fff"}}>Ambra</Text>
                    <Icon name='chevron-right' color='#f50' style={{fontSize: 20,fontWeight:"500"}}/>
                </View>
                <View style={{margin: 20,marginBottom: 40, justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize: 20, color:"#fff",fontWeight:"300"}}>Theme Settings</Text>
                    <Text style={{fontSize: 15,color:"#fff",textAlign: "center"}}>Here you can choose which themes appears above in the Themes selected.</Text>
                </View>
                {this.renderColorList()}
            </ScrollView>
        );
    };
};