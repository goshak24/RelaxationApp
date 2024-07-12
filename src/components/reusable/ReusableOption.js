import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import ReusableText from './ReusableText';
import WidthSpacer from './WidthSpacer';

const { width, height } = Dimensions.get('window');

const ReusableOption = ({ optionPic, label, desc }) => {
  const isImage = typeof optionPic === 'number'; 

  return (
    <TouchableOpacity>
      <View style={isImage ? styles.imageContainer : styles.textContainer}>
        <View style={styles.contentContainer}>
          {isImage ? (
            <Image source={optionPic} style={styles.image} />
          ) : (
            <ReusableText color='rgb(15, 26, 26)' fontFamily="Bold" fontSize={18} text={optionPic} />
          )}
        </View>

        <WidthSpacer width={10} />

        <View style={isImage ? styles.imageLabelContainer : styles.textLabelContainer}>
          <ReusableText color='rgb(15, 26, 26)' fontFamily={isImage ? "Bold" : "Regular"} fontSize={14} text={label} />
          {desc && <ReusableText color='rgb(15, 26, 26)' fontFamily="Regular" fontSize={14} text={desc} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    width: width * 0.8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 15,
  },
  textContainer: {
    flexDirection: 'row',
    width: width * 0.3,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 15,
  },
  contentContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: width * 0.35,
    height: height * 0.15,
    borderRadius: 10,
  },
  imageLabelContainer: {
    flexWrap: 'wrap',
    width: width * 0.475,
  },
  textLabelContainer: {
    flexWrap: 'wrap',
    width: width * 0.2,
  },
});

export default ReusableOption; 