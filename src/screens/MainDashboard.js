import { Dimensions, ScrollView, StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'; 
import Constants from 'expo-constants'; 
import HeightSpacer from '../components/reusable/HeightSpacer';
import ReusableText from '../components/reusable/ReusableText';
import ReusableButton from '../components/reusable/ReusableButton'; 
import { FontAwesome, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 
import ReusableOption from '../components/reusable/ReusableOption'; 

const { width, height } = Dimensions.get('window')

const MainDashboard = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}> 
        <ReusableText text="Get Ready to Relax" color='rgb(15, 26, 26)' fontFamily="Bold" fontSize={24} /> 

        <HeightSpacer height={10} /> 

        <View style={{backgroundColor: 'lightgray', alignItems: 'center', padding: 15, borderRadius: 10}}>

          {/* Recommended Videos */} 

          <View style={{backgroundColor: '#e1f2ce', justifyContent: 'center', alignItems: 'center', width: width*0.8, height: height*0.175, borderRadius: 10}}>

            <Image style={{width: width*0.35, height: height*0.15, borderRadius: 10}} source={require('../../assets/images/medi-cover.png')} />

          </View>

          <HeightSpacer height={10} />

          <ReusableText text="Rejuvination Time" color='rgb(15, 26, 26)' fontFamily="Bold" fontSize={18} /> 

          <View>
            
          <View style={{width: width*0.665, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}> 
            <View style={{width: width*0.35}}>
              <ReusableText text="Begin your journey" color='rgb(15, 26, 26)' fontFamily="Bold" fontSize={14} /> 
              <ReusableText text="towards tranquility" color='rgb(15, 26, 26)' fontFamily="Regular" fontSize={14} /> 
            </View>
            <ReusableButton btnText="Explore" width={width*0.25} textColor="rgb(15, 26, 26)" fontSize={18}backgroundColor="#ffffff" fontFamily='Regular' /> 
          </View>

          </View>

        </View>

        <HeightSpacer height={40} />

        <View style={{backgroundColor: 'lightgray', padding: 15, borderRadius: 10}}> 

          <ReusableText text="Scenes for Serenity" color='rgb(15, 26, 26)' fontFamily="Bold" fontSize={18} /> 

          <HeightSpacer height={10} />
          
          <View style={{flexDirection: 'row', flexWrap: 'wrap', width: width*0.8, height: height*0.125, justifyContent: 'space-between', margin: 10}}> 
            <ReusableOption optionPic={<FontAwesome name="bell" size={24} color="black" /> } label="Nature Scenes"/>
            <ReusableOption optionPic={<MaterialCommunityIcons name="waterfall" size={24} color="black" /> } label="Waterfall Views"/>
            <ReusableOption optionPic={<FontAwesome5 name="mountain" size={24} color="black" /> } label="Mountain Vistas"/>
            <ReusableOption optionPic={<MaterialCommunityIcons name="weather-sunset" size={24} color="black" />  } label="Sunset Beauty"/> 
          </View>

          <HeightSpacer height={20} /> 

          <ReusableText text="Meditation Sessions" color='rgb(15, 26, 26)' fontFamily="Bold" fontSize={18} /> 

          <HeightSpacer height={10} /> 

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            
            <View style={{backgroundColor: '#e1f2ce', height: height*0.125, width: width* 0.35, borderRadius: 10}}> 

            </View> 

            <View style={{backgroundColor: '#e1f2ce', height: height*0.125, width: width* 0.35, borderRadius: 10}}> 

            </View> 

          </View>

          {/* Mindful Breathing and Guided Meditation Section */} 

          <HeightSpacer height={25} /> 

          <View>

            <ReusableText text="Guided Support" color='rgb(15, 26, 26)' fontFamily="Bold" fontSize={18} /> 

            <HeightSpacer height={10} /> 

            <View style={{backgroundColor: '#e1f2ce', height: height*0.125, width: width* 0.75, borderRadius: 10, alignSelf: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly'}}> 

              <View>

                <View style={{width: width*0.2, flexDirection: 'row', justifyContent: 'space-between'}}>

                  <MaterialCommunityIcons name="star-four-points" size={24} color="#7bec00" /> 

                  <ReusableText text="Assistance" color='rgb(15, 26, 26)' fontFamily="Regular" fontSize={14} /> 

                </View> 

                <ReusableButton btnText="Connect" width={width*0.25} textColor="#ffffff" fontSize={18}backgroundColor="#7bec00" fontFamily='Regular' height={height*0.05} /> 

              </View>

              <Image source={require('../../assets/images/main-medi.png')} style={{height: height*0.09, width: width*0.25, borderRadius: 10}} />

            </View> 

          </View> 

          <HeightSpacer height={5} /> 

        </View>

        <HeightSpacer height={25} /> 

      </ScrollView>
    </View>
  )
}

export default MainDashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
  }, 
  innerContainer: {
    flex: 1, 
    marginTop: Constants.statusBarHeight, 
    padding: 15, 
  }, 
}) 