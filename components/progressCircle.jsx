import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Svg, { Circle } from 'react-native-svg';

const { width } = Dimensions.get('window');
const size = width - 32;
const strokeWidth = 40;
const raduis = (size - strokeWidth) / 2.7;
const circumfernece = raduis * 2 * Math.PI;

const ProgressCircle = () => {
  return (
    <View style={styles.circleContainer}>
      <Text>Runing in circles</Text>
      <Svg height={size} width={size}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={raduis}
            stroke="black"
            strokeWidth="25"
            fill="none"
          />
        </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    flex: 1,
    backgroundColor: 'rgb(200, 231, 250)',
    alignContent: 'center',
    justifyContent: 'center',
  }
});

export default ProgressCircle;