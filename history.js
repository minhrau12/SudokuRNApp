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
            <View style={styles.history}>
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
                <View style={{marginTop: 20,marginBottom: 20, justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize: 20, color:"#fff",fontWeight:"300"}}>Times</Text>
                </View>
                <View style={{padding: 20, flexDirection: "row", justifyContent: "space-around",alignItems:"center"}}>
                    <Icon name='chevron-left' color='#f50' style={{fontSize: 20,fontWeight:"500"}} onPress={()=>{}}/>
                    <Text style={{fontSize: 15,color:"#fff"}}>Beginner</Text>
                    <Icon name='chevron-right' color='#f50' style={{fontSize: 20,fontWeight:"500"}} onPress={()=>{}}/>
                </View>
                <View style={{margin: 10,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                    <TouchableNativeFeedback>
                        <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                            <Text style={{fontSize: 13, color:"#fff",paddingRight: 2}}>Assists:</Text>
                            <View style={{width: 13,height: 13, borderWidth: 1,borderRadius: 100, borderColor:"#666",margin: 2}}/>
                            <View style={{width: 13,height: 13, borderWidth: 1,borderRadius: 100, borderColor:"#666",margin: 2}}/>
                            <View style={{width: 13,height: 13, borderWidth: 1,borderRadius: 100, borderColor:"#666",margin: 2}}/>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                            <Text style={{fontSize: 13, color:"#fff",paddingRight: 2}}>Validation:</Text>
                            <View style={{width: 13,height: 13, borderWidth: 1,borderRadius: 100, borderColor:"#666",margin: 2}}/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}