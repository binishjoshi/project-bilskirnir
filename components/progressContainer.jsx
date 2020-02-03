import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Progress from './progress';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Hokage',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Hokage',
  },
  {
    id: '58694a0f-3da1-471f-bd-145571e29d72',
    title: 'Third Hokage',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Forth Hokage',
  },
  {
    id: '586940f-3da1-471f-bd96-145571e29d72',
    title: 'Fifth Hokage',
  },
  {
    id: '58694a0f-3da1-471f-bd6-145571e29d72',
    title: 'Sixth Hokage',
  },
  {
    id: '58694a0f-3da1-471\bd96-145571e29d72',
    title: 'Seventh Hokage',
  },
  {
    id: '58694a0f-3da1-471f-bd96571e29d72',
    title: 'Eighth Hokage',
  },
];

const ProgressContainer = () => {
  return (
    <View style={styles.progressContainer}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Progress
            title={item.title}
          />
        )}
        keyExtractor={item => item.id}
        numColumns='2'
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    backgroundColor: 'coral',
    alignItems: 'center',
  },
});

export default ProgressContainer;