import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Option from './option';

const OptionsContainer = () => {
  return (
    <View style={styles.optionsContainer}>
      <Text>Here goes option Container</Text>
      <Option />
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    flex: 1,
    backgroundColor: '#a69156',
  }
});

export default OptionsContainer;