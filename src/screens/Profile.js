import { StyleSheet, View, Dimensions } from 'react-native' 
import React, { useContext } from 'react'
import Constants from 'expo-constants'; 
import { Context as AuthContext } from '../context/AuthContext'; 
import ReusableText from '../components/reusable/ReusableText';
import HeightSpacer from '../components/reusable/HeightSpacer';
import ReusableButton from '../components/reusable/ReusableButton';
import { navigationRef } from '../utilities/navigationRef';

const { width, height } = Dimensions.get('window');

const Profile = () => {
  const { state, signout } = useContext(AuthContext); 

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>

      {state.token ? (
          <>
            <View style={{ width: width * 0.4, height: width * 0.4, borderRadius: 100, backgroundColor: 'lightgray', alignSelf: 'center' }}>
              {/* Pfp */}
            </View>

            <HeightSpacer height={20} />

            <View style={{ flex: 0.1, height: height * 0.25, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
              <ReusableText color='rgb(15, 26, 26)' fontFamily={"Bold"} fontSize={24} text="Name" />
            </View>

            <HeightSpacer height={20} />

            <View style={{ alignItems: 'center' }}>
              <ReusableButton btnText="Sign Out" textColor='rgb(15, 26, 26)' fontFamily="Regular" fontSize={18} margin={-10} borderWidth={2} width={width * 0.35} onPress={() => signout()} />
            </View>
          </>
        ) : (
          <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <ReusableButton btnText="Sign In" textColor='rgb(15, 26, 26)' fontFamily="Regular" fontSize={18} margin={-10} borderWidth={2} width={width * 0.35} onPress={() => navigationRef.navigate('Onboarding')} />
            </View>
          </>
        )} 
      </View>
    </View>
  )
}

export default Profile

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