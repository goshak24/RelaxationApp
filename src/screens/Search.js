import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import ReusableText from '../components/reusable/ReusableText';
import Searchbar from '../components/Searchbar';
import HeightSpacer from '../components/reusable/HeightSpacer';
import ReusableButton from '../components/reusable/ReusableButton';
import SearchResults from '../components/SearchResults';
import { navigationRef } from '../utilities/navigationRef';

const Search = () => {
  const demoResults = [
    {
      id: '1',
      picUri: require('../../assets/images/result.png'),
      title: 'Demo',
      bio: 'This is a demo.',
    },
    {
      id: '2',
      picUri: require('../../assets/images/result.png'),
      title: 'a22222222222222222222222222222222222',
      bio: 'This is a demo.',
    },
  ];

  const [resetFilter, setResetFilter] = useState(false);
  const [filteredResults, setFilteredResults] = useState(demoResults);

  const handleResetFilter = () => {
    setResetFilter(true);
    setTimeout(() => setResetFilter(false), 0);
    setFilteredResults(demoResults); 
  };

  const handleSubmit = (term) => {
    console.log('Handling submit for term:', term); // Debugging log
    const results = demoResults.filter(item => item.title.toLowerCase().includes(term.toLowerCase()));
    setFilteredResults(results);
    console.log('Filtered results:', results); // Debugging log
  }; 

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => navigationRef.navigate('MainTab', { screen: 'Dashboard' })}>
          <AntDesign name="back" size={32} color="black" />
        </TouchableOpacity>

        <View style={{ alignItems: 'center' }}>
          <ReusableText text="Search" color='rgb(15, 26, 26)' fontFamily="Bold" fontSize={28} />

          <HeightSpacer height={20} />

          <Searchbar key={resetFilter ? 'reset' : 'default'} resetFilter={resetFilter} onSubmit={handleSubmit} />

        </View>

        <HeightSpacer height={50} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <ReusableText text="Discover new scenes" color='rgb(15, 26, 26)' fontFamily="Bold" fontSize={18} />

          <ReusableButton btnText="Reset Filters" textColor='rgb(15, 26, 26)' fontFamily="Regular" fontSize={18} margin={-10} onPress={handleResetFilter} />
        </View>

        <HeightSpacer height={20} />

        <SearchResults results={filteredResults} />
      </View>
    </View>
  );
};

export default Search;

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
}); 