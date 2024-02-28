import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Test HomeScreen</Text>
      <Button
        color="rgba(127, 103, 190, 1)"
        title="Navigate to TestApp GalleryScreen!@"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
  },
});

export default HomeScreen;
