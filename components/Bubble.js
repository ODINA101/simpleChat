/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {Svg} from "expo"

export default class Bubble extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    if(this.props.left == true) {
    return (
      <View>
      <View style={{justifyContent: 'flex-end'}}>
       <Text style={{color:"#8097b1",fontSize:14,marginLeft:44}}>{this.props.name}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Image source={{uri:"https://randomuser.me/api/portraits/women/46.jpg"}} style={{width:30,height:30,borderRadius:15,marginTop:20}}>
      </Image>
      <View style={[styles.item, styles.itemIn]}>

      <View style={[styles.balloon, {backgroundColor: 'grey'}]}>
        <Text style={{paddingTop: 5, color: 'white'}}>{this.props.msg}</Text>
        <View
        style={[
          styles.arrowContainer,
          styles.arrowLeftContainer,
        ]}
      >
         <Svg style={styles.arrowLeft} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32.484 17.5 15.515 17.5"  enable-background="new 32.485 17.5 15.515 17.5">
              <Svg.Path
                  d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                  fill="grey"
                  x="0"
                  y="0"
              />
          </Svg>

      </View>
      </View>
    </View>

  </View>
</View>

    );
  }else{
    return (
      <View>
      <View style={{justifyContent: 'flex-end'}}>
       <Text style={{color:"#8097b1",fontSize:14,marginRight:47,alignSelf:'flex-end'}}>{this.props.name}</Text>
      </View>
      <View style={{flexDirection: 'row',alignSelf: 'flex-end'}}>

      <View style={[styles.item, styles.itemOut]}>
  <View style={[styles.balloon, {backgroundColor: '#1084ff'}]}>
    <Text style={{paddingTop: 5, color: 'white'}}>{this.props.msg}</Text>
    <View
    style={[
      styles.arrowContainer,
      styles.arrowRightContainer,
    ]}
  >
     <Svg style={styles.arrowRight} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)} viewBox="32.485 17.5 15.515 17.5"  enable-background="new 32.485 17.5 15.515 17.5">
          <Svg.Path
              d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
              fill="#1084ff"
              x="0"
              y="0"
          />
      </Svg>
  </View>
  </View>
  </View>
  <Image source={{uri:"https://randomuser.me/api/portraits/men/53.jpg"}} style={{width:30,height:30,borderRadius:15,marginTop:20}}>
  </Image>
</View>
</View>

    )
  }



  }
}

const styles = StyleSheet.create({
  item: {
        marginTop:2,
         marginVertical: moderateScale(7, 2),
         flexDirection: 'row'
      },
      itemIn: {
          marginLeft: 10,
      },
      itemOut: {
         alignSelf: 'flex-end',
         marginRight: 10
      },
      balloon: {
         maxWidth: moderateScale(250, 2),
         paddingHorizontal: moderateScale(10, 2),
         paddingTop: moderateScale(5, 2),
         paddingBottom: moderateScale(7, 2),
         borderRadius: 20,
      },
      arrowContainer: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          flex: 1
      },
      arrowLeftContainer: {
          justifyContent: 'flex-end',
          alignItems: 'flex-start'
      },

      arrowRightContainer: {
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
      },

      arrowLeft: {
          left: moderateScale(-6, 0.5),
      },

      arrowRight: {
          right:moderateScale(-6, 0.5),
      }
});
