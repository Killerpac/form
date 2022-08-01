//make a name field react native
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

function TextBar(props) {

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        label= {props.label}
        error={props.error}
        mode='flat'
        value={props.value}
        multiline={props.multiline}
        onChangeText={(text) => props.onChangeText(text)}
        keyboardType={props.keyboardType? props.keyboardType : 'default'}
        textContentType={props.textContentType? props.textContentType : 'none'}
      />
      <Text style={styles.error}>{props.error==true?props.errormsg:''}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      height: 40,
      width: '90%',
      marginBottom: '15%',
      elevation: 20,

    },
    error:{
      color: 'red',
      fontSize: 12,
    },
    input: {
        height: 60,
        width: '100%',
        backgroundColor: '#edfff5',
        elevation: 20,
      },
});


export default TextBar;