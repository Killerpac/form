import React, { useState } from "react";
import { StyleSheet, View  } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Text } from "react-native-paper";

let color = false


function Drop(props){
    const [value, setValue] = useState(null);
    const genderList = [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
        {
          label: "Rather Not To Say",
          value: "others",
        },
      ];
      props.error==true?color=true:false
    return(
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdown}
                data={genderList}
                onChange={(value) => { setValue(value) ; props.onChangeText(value.label)}}
                labelField="label"
                valueField="value"
                value={value}
                placeholder="Select your Gender"
            />
            <Text style={styles.error}>{props.error==true?props.errormsg:''}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 40,
      width: '90%',
      margin: 50,
      borderColor: 'red'
    },
    dropdown: {
        height:60,
        backgroundColor: '#edfff5',
        borderRadius: 4,
        paddingHorizontal: 8,
        elevation: 20,
      },
      error:{
        color: 'red',
        fontSize: 12,
      },
    });

export default Drop