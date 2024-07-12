import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import ReusableOption from './reusable/ReusableOption';

const SearchResults = ({ results }) => {
  const renderItem = ({ item }) => (
    <ReusableOption optionPic={item.picUri} label={item.title} desc={item.bio} />
  );

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={results}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({}); 