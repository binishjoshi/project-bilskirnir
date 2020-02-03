import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Progress from './progress';

const ProgressContainer = () => {
  return (
    <View style={styles.progressContainer}>
      <Progress />
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    flex: 1,
    backgroundColor: 'coral',
  }
});

export default ProgressContainer;