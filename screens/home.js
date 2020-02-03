import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ProgressCircle from 'react-native-progress-circle';
import ProgressContainer from '../components/progressContainer';
import OptionsContainer from '../components/optionsContainer';

const { width } = Dimensions.get('window');
const radius = width - 270;

const Home = () => {
  return (
    <View style={styles.homeContainer}>

      <View style={styles.currentLevelContainer}>
        <View style={styles.circleContainer}>
          <ProgressCircle
                percent={69}
                radius={radius}
                borderWidth={18}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"
            >
              <Text>69 %</Text>
            </ProgressCircle>
        </View>
        <View style={styles.circleDetail}>
          <Text>Details about circle</Text>
        </View>
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
    flex: 6,
    alignItems: 'center',
    backgroundColor: '#49d8d4',
  },
  circleContainer:{
    flex: 10,
    backgroundColor: 'rgb(123, 99, 216)',
    alignItems: 'center',
    flexDirection: 'row',
  },
  circleUp:{
    flex: 3,
    backgroundColor: 'rgb(12, 69, 132)'    
  },
  circleDetail: {
    flex: 2,
    backgroundColor: 'rgb(116, 159, 60)',
  },
  progressContainer: {
    flex: 4,
    backgroundColor: 'blue',
  },
  optionsContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
})

export default Home;