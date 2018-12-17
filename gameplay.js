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
                <View style={{marginTop: 20,marginBottom: 40, justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize: 20, color:"#fff",fontWeight:"300"}}>Gameplay Settings</Text>
                </View>
                <View style={{alignItems:"center",margin: 5,padding: 5}}>
                    <Text style={{fontSize: 13,color:"#fff",textAlign:"center",paddingBottom: 5}}>On-board animations</Text>
                    <View style={{width: 70,height: 70,borderWidth:1,borderRadius:100,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"#fff"}}>ON</Text>
                    </View>
                </View>
                <View style={{alignItems:"center",margin: 5,padding: 5}}>
                    <Text style={{fontSize: 13,color:"#fff",textAlign:"center",paddingBottom: 5}}>Time counter</Text>
                    <Text style={{fontSize: 10,color:"#ccc",textAlign:"center",paddingBottom: 5}}>If this is disabled, there is no more room for the game controls. Time will be seen when game ends both ways.</Text>
                    <View style={{width: 70,height: 70,borderWidth:1,borderRadius:100,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"#fff"}}>ON</Text>
                    </View>
                </View>
                <View style={{alignItems:"center",margin: 5,padding: 5}}>
                    <Text style={{fontSize: 13,color:"#fff",textAlign:"center",paddingBottom: 5}}>Distinguish locked cells</Text>
                    <Text style={{fontSize: 10,color:"#ccc" ,textAlign:"center",paddingBottom: 5}}>Turn this off for even cleaner look for your sudoku board.</Text>
                    <View style={{width: 70,height: 70,borderWidth:1,borderRadius:100,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"#fff"}}>ON</Text>
                    </View>
                </View>
                <View style={{alignItems:"center",margin: 5,padding: 5}}>
                    <Text style={{fontSize: 13,color:"#fff",textAlign:"center",paddingBottom: 5}}>Double-tap erase</Text>
                    <View style={{width: 70,height: 70,borderWidth:1,borderRadius:100,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"#fff"}}>ON</Text>
                    </View>
                </View>
            </ScrollView>
        );
    };
};