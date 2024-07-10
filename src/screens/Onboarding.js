import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import HeightSpacer from '../components/reusable/HeightSpacer';
import ReusableButton from '../components/reusable/ReusableButton';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window')

const Onboarding = () => {
    const navigation = useNavigation(); 

    return (
    <View style={styles.container}>
        <View style={{height: height*0.65, width: width*1, alignItems: 'center', justifyContent: 'center'}}> 

            <Image source={require('../../assets/images/medi-signup.png')} style={styles.imageStyles}/> 

            <HeightSpacer height={20} /> 

            <Text style={{fontFamily: 'Bold', fontSize: 33, color: 'rgb(15, 26, 26)'}}>Welcome to ZenZone</Text>

            <HeightSpacer height={10} /> 

            <View style={{width: width*0.85}}>
                <Text style={{fontFamily: 'Regular', fontSize: 20, color: 'gray', textAlign: 'center'}}>Experience serenity and calmness in every session.</Text>
            </View>

        </View> 


        <View style={{width: width*1, alignItems: 'center'}}>
            <View style={{width: width*0.85, justifyContent: 'space-around', flexDirection: 'row'}}>
                <ReusableButton btnText="Sign In" width={width*0.35} textColor="white" fontSize={18}backgroundColor="#7bec00" fontFamily='Regular' onPress={() => navigation.navigate('SignIn')} /> 
                <ReusableButton btnText="Join Now" width={width*0.35} textColor="white" fontSize={18}backgroundColor="#7bec00" fontFamily='Regular' onPress={() => navigation.navigate('SignUp')} /> 
            </View> 

            <HeightSpacer height={15} /> 

            <ReusableButton btnText="Explore without an account" width={width*0.75} textColor="gray" fontSize={18} borderWidth={0} borderRadius={25} fontFamily='Regular' onPress={() => navigation.navigate('MainDashboard')} /> 
        </View>

    </View> 
  )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        backgroundColor: '#ffffff', 
        padding: 15   
    }, 
    imageStyles: {
        height: height*0.42, 
        width: width*0.8, 
        borderRadius: 10  
    } 
}) 