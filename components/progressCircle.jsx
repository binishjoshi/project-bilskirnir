import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ProgressCircle = () => {
  return (
    <View style={styles.circleContainer}>
      <Text>Here goes circle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    flex: 1,
    backgroundColor: '#800c1c',
  }
});

export default ProgressCircle;