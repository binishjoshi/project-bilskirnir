import React from 'react';
import {
  Dimensions,
  Platform,
  ProgressBarAndroid,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');
const progressLength = width / 2 - 20;

const Progress = ({ title }) => {
  return (
    <View style={styles.progressContainer}>

      <View style={styles.progressTitle}>
        <Text>{ title }</Text>
      </View>

      <View style={styles.bar}>
        { Platform.OS === 'android' ? 
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.19}
            style={styles.progress}
          />:
          null
        }        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    backgroundColor: 'rgb(56,26,100)',
    width: progressLength,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 6,
    margin: (width * 0.02),
  },
  progressTitle: {
    backgroundColor: 'rgb(56,26,200)',
    padding: 5,
  },
  bar: {
    backgroundColor: 'rgb(79, 91, 39)',
  },
  progress: {
    width: '90%',
    height: 40,
  }
});

export default Progress;