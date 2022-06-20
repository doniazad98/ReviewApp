import React from 'react'
import { globalStyles } from '../styles/global';
import { StyleSheet, Text, View } from 'react-native';
export default function ReviewDetails({route,navigation}) {
  const review=route.params;
  console.log(review)
    return (
      <View style={globalStyles.container}>
        <Text> ReviewDetails Screen </Text>
        
      </View>
    );
  }
  
