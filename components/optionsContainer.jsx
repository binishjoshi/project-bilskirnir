import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const OptionsContainer = () => {
  return (
    <View style={styles.optionsContainer}>
      <MaterialCommunityIcons name='heart' size={55} />
      <MaterialCommunityIcons name='account' size={55} />
      <MaterialCommunityIcons name='settings' size={55} />
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    flex: 1,
    backgroundColor: '#a69156',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default OptionsContainer;