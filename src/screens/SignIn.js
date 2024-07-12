import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import HeightSpacer from '../components/reusable/HeightSpacer';
import { Context as AuthContext } from '../context/AuthContext'; 
import ReusableButton from '../components/reusable/ReusableButton'; 
import { AntDesign } from '@expo/vector-icons'; 
import ReusableForm from '../components/reusable/ReusableForm';

const {width, height} = Dimensions.get('window')

const SignIn = () => {
    const { signin } = useContext(AuthContext)

    return (
    <View style={styles.container}>
        <View style={{height: height*0.65, width: width*1, alignItems: 'center', justifyContent: 'center'}}> 

            <Image source={require('../../assets/images/medi-signup.png')} style={styles.imageStyles}/> 

            <HeightSpacer height={20} /> 

            <Text style={{fontFamily: 'Bold', fontSize: 33, color: 'rgb(15, 26, 26)'}}>Sign In</Text>

        </View> 


        <View style={{width: width*1, height: height*0.25, alignItems: 'center', justifyContent: 'center'}}> 
            <ReusableForm onSubmit={({ email, password }) => signin({ email, password })} /> 

            <HeightSpacer height={20} /> 

        </View>

    </View> 
  )
}

export default SignIn

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