import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import HeightSpacer from '../components/reusable/HeightSpacer';
import ReusableForm from '../components/reusable/ReusableForm';
import { Context as AuthContext } from '../context/AuthContext'; 
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window')

const SignUp = () => {

    const navigation = useNavigation(); 
    const { signup, clearErrorMessage } = useContext(AuthContext); 

    useEffect(() => {
        const unsubscribeFocus = navigation.addListener('focus', clearErrorMessage);
        const unsubscribeBlur = navigation.addListener('blur', clearErrorMessage);
    
        return () => {
          unsubscribeFocus();
          unsubscribeBlur(); 
        };
      }, [navigation]); 

    return (
    <View style={styles.container}>
        <View style={{height: height*0.65, width: width*1, alignItems: 'center', justifyContent: 'center'}}> 

            <Image source={require('../../assets/images/medi-signup.png')} style={styles.imageStyles}/> 

            <HeightSpacer height={20} /> 

            <Text style={{fontFamily: 'Bold', fontSize: 33, color: 'rgb(15, 26, 26)'}}>Sign Up</Text>

        </View> 


        <View style={{width: width*1, height: height*0.25, alignItems: 'center', justifyContent: 'center'}}> 
            <ReusableForm onSubmit={({ email, password }) => signup({ email, password })} /> 
        
        </View>

    </View> 
  )
} 

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-center', 
        alignItems: 'center', 
        backgroundColor: '#ffffff'   
    }, 
    imageStyles: {
        height: height*0.42, 
        width: width*0.8, 
        borderRadius: 10  
    }
}) 