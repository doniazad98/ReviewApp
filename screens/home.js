import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { globalStyles } from '../styles/global';

export default function Home({navigation}) {
  const [review,setReviews]=useState([
    {title:'Zelda, Breath of Fresh air ', rating:5 , body :'lorem ipsum',key:'1'},
    {title:'Gotta Catch Them All (again)', rating:4 , body :'lorem ipsum',key:'2'},
    {title:'Not So Final Fantasy', rating:3 , body :'lorem ipsum',key:'3'},
  ])
  const pressHandler=()=>{
    //navigation.navigate('ReviewDetails');
    navigation.push('ReviewDetails' , review)
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="rieview details" onPress={pressHandler}/>
    </View>
  );
}

