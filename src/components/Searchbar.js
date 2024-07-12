import { Dimensions, StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import ReusableTextInput from './reusable/ReusableTextInput';

const { width, height } = Dimensions.get('window');

const Searchbar = ({ resetFilter, onSubmit }) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (resetFilter) {
      setTerm('');
    }
  }, [resetFilter]);

  const handleSubmitEditing = () => {
    console.log('Submitting search term:', term); // Debugging log
    if (onSubmit) {
      onSubmit(term);
    }
  };

  return (
    <View>
      <ReusableTextInput
        width={width * 0.85}
        height={height * 0.06}
        fontSize={16}
        borderWidth={2}
        borderColor={'rgb(15, 26, 26)'}
        borderRadius={10}
        value={term}
        onChangeText={(newTerm) => setTerm(newTerm)}
        placeholder="Search"
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
};

export default Searchbar; 