import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MainStackNavigationProp} from '../navigation/MainNavigator';

const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>HomeScreen</Text>
      <Button
        color="rgba(127, 103, 190, 1)"
        title="Navigate to DetailScreen"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
      <Button
        color="rgba(127, 103, 190, 1)"
        title="Navigate to MiniApp"
        onPress={() => {
          navigation.navigate('MiniApp');
        }}
      />
      <Button
        color="rgba(127, 103, 190, 1)"
        title="Navigate to BookingApp"
        onPress={() => {
          navigation.navigate('BookingApp');
        }}
      />
      <Button
        color="rgba(127, 103, 190, 1)"
        title="Navigate to TestApp"
        onPress={() => {
          navigation.navigate('TestApp');
        }}
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
