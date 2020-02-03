import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Option = () => {
  return (
    <View style={styles.option}>
      <Text>Here goes an option</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  option: {
    backgroundColor: '#d60d68',
  }
});

export default Option;