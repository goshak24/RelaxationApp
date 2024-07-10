import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReusableButton = ({ onPress, btnText, textColor, width, backgroundColor, borderWidth, borderColor, fontFamily, fontSize, height }) => { 
    const styles = StyleSheet.create({
        container: {
            margin: 5,
            height: height, 
            width: width, 
            backgroundColor: backgroundColor, 
            borderWidth: borderWidth, 
            borderColor: borderColor, 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: 10, // Add padding for better touch area 
            borderRadius: 10, 
        },
        text: {
            color: textColor, 
            fontFamily: fontFamily,  
            fontSize: fontSize
        }
    });

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={styles.text}>{btnText}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ReusableButton; 