import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import StatsEditor from './src/StatsEditor'

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatsEditor />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
