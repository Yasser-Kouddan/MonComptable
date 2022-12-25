import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function CustomButton(props){
  return( 
    <View style={[props.position,{marginVertical: 30}]}>
      <TouchableOpacity style={[props.customStyle,{backgroundColor: props.bgColor, color: props.titleColor, width: 92, height: 41, borderRadius: 10, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}]}>
          <Text style={[props.titleStyle,{fontFamily: 'Lato', fontWeight: '500', fontSize: 20,color: props.titleColor}]}>{props.title}</Text>
          <AntDesign name="arrowright" size={19} color="white" />
      </TouchableOpacity>    
    </View>
  );
}
