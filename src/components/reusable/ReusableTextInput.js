import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

const ReusableTextInput = ({
  placeholder = "Enter text",
  value,
  onChangeText,
  fontFamily = "System",
  fontSize = 14,
  color = "#000",
  secureTextEntry = false,
  width = "100%",
  height = 40,
  borderColor = "#000",
  borderWidth = 1,
  multiline = false,
  maxLines = null,
  borderRadius = 5,
  onSubmitEditing,
}) => {
  const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
      borderColor: borderColor,
      borderWidth: borderWidth,
      padding: 10,
      borderRadius: borderRadius,
      justifyContent: 'center'
    },
    textStyle: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: color,
      textAlignVertical: multiline ? 'top' : 'center',
      flex: 1,
      textAlign: 'center'
    },
  });

  const handleTextChange = (text) => {
    if (maxLines) {
      const lines = text.split('\n');
      if (lines.length <= maxLines) {
        onChangeText(text);
      } else {
        // Limit the text to the allowed number of lines
        const limitedText = lines.slice(0, maxLines).join('\n');
        onChangeText(limitedText);
      }
    } else {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={handleTextChange}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

export default ReusableTextInput; 