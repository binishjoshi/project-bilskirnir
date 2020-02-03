import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Progress = () => {
  return (
    <View style={styles.progress}>
      <Text>This is a progress</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progress: {
    backgroundColor: '#d60d68',
  }
});

export default Progress;