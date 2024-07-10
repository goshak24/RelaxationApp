import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import HeightSpacer from './HeightSpacer';
import ReusableText from './ReusableText';
import ReusableTextInput from './ReusableTextInput'; 

const {width, height} = Dimensions.get('window')

const ReusableForm = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const fields = [
        {
        label: 'Email',
        value: email,
        onChange: setEmail,
        },
        {
        label: 'Password',
        value: password,
        onChange: setPassword,
        secureTextEntry: true,
    }, 
  ]; 
    
    const renderFields = () => {
        return fields.map((field, index) => (
            <View style={styles.container} key={index}>
              <ReusableText text={field.label} color='rgb(15, 26, 26)' fontFamily="Regular" /> 
              <HeightSpacer height={10} />
              <ReusableTextInput 
                width={width*0.75} height={height*0.06} fontSize={16}
                onChangeText={field.onChange} borderWidth={2} borderColor={'rgb(15, 26, 26)'}
                value={field.value} borderRadius={10}
                secureTextEntry={field.secureTextEntry || false}
              />
              <HeightSpacer height={15} />
            </View>
          ));  
    } 

    return (
        <View style={styles.container}>
            {renderFields()}
        </View>
  )
}

export default ReusableForm

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }, 
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
}); 