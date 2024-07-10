import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ReusableText from './ReusableText'
import WidthSpacer from './WidthSpacer'; 
import HeightSpacer from './HeightSpacer';

const { width, height } = Dimensions.get('window') 

const ReusableOption = ({optionPic, label}) => {
  return (
    <TouchableOpacity>
        <View style={{flexDirection: 'row', width: width*0.3, justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, marginBottom: 15}}>
            <View style={{backgroundColor: '#ffffff', borderRadius: 10, padding: 10}}>
                <ReusableText color='rgb(15, 26, 26)' fontFamily="Bold" fontSize={18} text={optionPic} />
            </View> 

            <WidthSpacer width={10} />

            <View style={{flexWrap: 'wrap', width: width*0.2}}>
                <ReusableText color='rgb(15, 26, 26)' fontFamily="Regular" fontSize={14} text={label} />
            </View>
        </View>
    </TouchableOpacity> 
  )
}

export default ReusableOption

const styles = StyleSheet.create({}) 