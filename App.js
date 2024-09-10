import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import React, { useState } from 'react';
import Input from './components/Input';

export default function App() {
  const appName = 'My app!'; // Declare the variable and assign the app name
  return (
    <View style={styles.container}>
      <Header name={appName} />
      <Input />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})