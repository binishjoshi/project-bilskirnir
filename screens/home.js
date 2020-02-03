import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ProgressCircle from '../components/progressCircle';
import ProgressContainer from '../components/progressContainer';
import OptionsContainer from '../components/optionsContainer';

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.currentLevelContainer}>
        <ProgressCircle />
      </View>
      <View style={styles.progressContainer}>
        <ProgressContainer />
      </View>
      <View style={styles.optionsContainer}>
        <OptionsContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'pink',
  },
  currentLevelContainer:{
    flex: 4,
    backgroundColor: 'red',
  },
  progressContainer: {
    flex: 2,
    backgroundColor: 'blue',
  },
  optionsContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
})

export default Home;