global.___DEV___ = false
console.disableYellowBox = true;
import io from 'socket.io-client';
import React from 'react';
import { TextInput,StyleSheet, Text, View,ImageBackground,ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import Chat from "./components/chat"
import { KeyboardAvoidingView } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
  super(props)
  this.socket = io('http://159.89.106.5/')





  this.state = {
    txt:"",
    chat:[
       {
         name:"Anna",
         msg:"zd!ravaxar?",
         left:true
       },
       {
         name:"irakli",
         msg:"ravi sakaifod",
         left:false
       },
 
    ]
  }


  this.socket.on("chat message",(msg) => {

    let convo = this.state.chat;
    convo.push({
      name:msg.name,
      msg:msg.msg,
      left:true
    })

    this.setState({chat:convo})
  })



  }

  sendMessage() {

    let convo = this.state.chat;
    convo.push({
      name:"irakli",
      msg:this.state.txt,
      left:false
    })
    this.socket.emit('chat message',{msg:this.state.txt,name:"irakli"})
    this.setState({txt:"",chat:convo})
  }


  render() {
    return (
      <View style={styles.container}>
      <View style={{elevation:3,paddingTop:20,height:70,justifyContent: 'center'}}>
         <Ionicons  name="md-arrow-back" size={35} color="#0befb5"/>
      </View>


 <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
 <View style={{height:30}}/>
      <View style={{height:120,flexDirection: 'row',justifyContent: 'space-between',}}>

      <View style={{flexDirection: 'row'}}>

        <View style={{width:50,height:50,backgroundColor:"#F7EC00",borderRadius:25,alignItems: 'flex-end'}}>
        <View style={{width:16,height:16,borderRadius:8,backgroundColor:"#6900FF",borderWidth:2,borderColor:"#FFF"}}/>

        </View>
        <View style={{paddingLeft:10}}>
              <Text style={{fontSize:15,color:"#2e384d",fontWeight: '500'}}>ATLAS</Text>
               <Text style={{fontSize:15,color:"#8798ad"}}>MANAGER</Text>
        </View>
      </View>
   <View>
   <Text style={{marginTop:10,fontWeight: 'bold',color:"#2e5bff",fontSize:18}}>Show more</Text>
   </View>
      </View>

        <Chat conv={this.state.chat}/>

    </ScrollView>
    <KeyboardAvoidingView behavior="padding" enabled>
    <View style={{height:70,borderRadius:6,backgroundColor:"#f4f6fc",marginBottom:20,paddingLeft:10,paddingRight:10}}>
    <TextInput value={this.state.txt} onChangeText={(t) => this.setState({txt:t})} onSubmitEditing={() => this.sendMessage()}  style={{height:70}} placeholder="Type message" send/>
</View>
</KeyboardAvoidingView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:15,
  },
});
