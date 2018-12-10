import React, {Component} from 'react';
import {Text, View, TouchableNativeFeedback,ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from "./styles";

export default class GameScreen extends Component {
  constructor(){
      super();
      this.state = {
          elapsed_m: 0,
          elapsed_s: 0,
      };
  }
  static navigationOptions = {
      title:"Game Screen",
      header: null,
  };
  componentWillMount(){
    setInterval(()=>{
        if (this.state.elapsed_s === 59) {
            this.setState({elapsed_s: 0,elapsed_m: this.state.elapsed_m+1});
        } else {
            this.setState({elapsed_s: this.state.elapsed_s+1});
        }},1000);
  };
  render(){
    return(
        <View style={{flex:1, backgroundColor:"#333"}}>
            <View style={{
                padding: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start"
            }}>
                <Icon name='chevron-left' color='#f50' style={{fontSize: 20,fontWeight:"500"}}/>
                <Text style={{fontSize: 15,color:"#fff",paddingBottom: 20}}>Ambra</Text>
                <Icon name='chevron-right' color='#f50' style={{fontSize: 20,fontWeight:"500"}}/>
            </View>
            <View style={{justifyContent:"center",alignItems:"center",marginBottom: 10}}>
                <Text style={{fontSize: 15,color:"#fff"}}>{this.state.elapsed_m === 0 ? "" : this.state.elapsed_m + "m"} {this.state.elapsed_s}s</Text>
            </View>
            <View></View>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <View style={{width: 50,height: 50,margin:5, borderWidth: 1,borderRadius: 100,borderColor:"#666",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:25,color:"#fff",fontWeight:"500"}}>1</Text>
                    <Text style={{fontSize: 10,color:"#fff",position:"absolute",bottom:0}}>9</Text>
                </View>
                <View style={{width: 50,height: 50,margin:5, borderWidth: 1,borderRadius: 100,borderColor:"#666",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:25,color:"#fff",fontWeight:"500"}}>2</Text>
                    <Text style={{fontSize: 10,color:"#fff",position:"absolute",bottom: 0}}>9</Text>
                </View>
                <View style={{width: 50,height: 50,margin:5, borderWidth: 1,borderRadius: 100,borderColor:"#666",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:25,color:"#fff",fontWeight:"500"}}>3</Text>
                    <Text style={{fontSize: 10,color:"#fff",position:"absolute",bottom: 0}}>9</Text>
                </View>
                <View style={{width: 50,height: 50,margin:5, borderWidth: 1,borderRadius: 100,borderColor:"#666",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:25,color:"#fff",fontWeight:"500"}}>4</Text>
                    <Text style={{fontSize: 10,color:"#fff",position:"absolute",bottom: 0}}>9</Text>
                </View>
                <View style={{width: 50,height: 50,margin:5, borderWidth: 1,borderRadius: 100,borderColor:"#666",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:25,color:"#fff",fontWeight:"500"}}>5</Text>
                    <Text style={{fontSize: 10,color:"#fff",position:"absolute",bottom: 0}}>9</Text>
                </View>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <View style={{width: 50,height: 50,margin:5, borderWidth: 1,borderRadius: 100,borderColor:"#666",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:25,color:"#fff",fontWeight:"500"}}>6</Text>
                    <Text style={{fontSize: 10,color:"#fff",position:"absolute",bottom: 0}}>9</Text>
                </View>
                <View style={{width: 50,height: 50,margin:5, borderWidth: 1,borderRadius: 100,borderColor:"#666",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:25,color:"#fff",fontWeight:"500"}}>7</Text>
                    <Text style={{fontSize: 10,color:"#fff",position:"absolute",bottom: 0}}>9</Text>
                </View>
                <View style={{width: 50,height: 50,margin:5, borderWidth: 1,borderRadius: 100,borderColor:"#666",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:25,color:"#fff",fontWeight:"500"}}>8</Text>
                    <Text style={{fontSize: 10,color:"#fff",position:"absolute",bottom: 0}}>9</Text>
                </View>
                <View style={{width: 50,height: 50,margin:5, borderWidth: 1,borderRadius: 100,borderColor:"#666",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:25,color:"#fff",fontWeight:"500"}}>9</Text>
                    <Text style={{fontSize: 10,color:"#fff",position:"absolute",bottom: 0}}>9</Text>
                </View>
                <View style={{width: 50,height: 50,margin:5, borderWidth: 1,borderRadius: 100,borderColor:"#666",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:25,color:"#fff",fontWeight:"500"}}>X</Text>
                </View>
            </View>
            <View style={{flex:1,justifyContent:"flex-end",alignItems:"center"}}>
                <View style={{width: "80%",flexDirection:"row",justifyContent:"space-around",alignItems:"center",padding: 10,margin: 10}}>
                    <Icon name="undo" type="font-awesome" color="#fff" size={15}/>
                    <Icon name="check" type="font-awesome" color="#fff" size={15}/>
                    <Icon name="pencil" type="material-community" color="#fff" size={20}/>
                    <Icon name="redo" type="material-community" color="#fff" size={15}/>
                </View>
            </View>
        </View>
    );
  };
};