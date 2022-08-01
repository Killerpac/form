//create a sumbit and clear button in react native
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

async function submitdatatofirebase(props){

    // const firebaseConfig =  {
    //     apiKey: "*****",
    //     authDomain: "*****",
    //     databaseURL: "*****",
    //     projectId: "*****",
    //     storageBucket: "*****",
    //     messagingSenderId: "*****",
    //     appId: "*****",
    //     measurementId: "*****"
    //   };
    //     // Initialize Firebase
    // initializeApp(firebaseConfig);

    // await docRef.set({
    //     name: props.name,
    //     number: props.number,
    //     address: props.address,
    //     city: props.city,
    //     state: props.state,
    //     gender:props.gender
    // });
    
}
    


function Buttons(props) {
    var phone = /^[0-9]{10}$/
    return (
        <View style={styles.container}>
        <View style={styles.button}>
            <Button
            style={styles.buttonContent}
            color='#bcece5'
            contentStyle={styles.buttonContent}
            mode='contained'
            onPress={() => 
                {
                   var err = 0
                    if(props.name.length < 3){
                        props.error(1)
                        err = 1
                    }
                    
                    if(!phone.test(props.number)){
                        props.error(2)
                        err = 1
                    }

                    if(props.address.length < 10){
                        props.error(3)
                        err = 1
                    }
                    if(props.city.length < 1){
                        props.error(4)
                        err = 1
                    }
                    if(props.state.length < 1){
                        props.error(5)
                        err = 1
                    }
                    if(props.gender == ''){
                        props.error(6)
                        err = 1
                    }

                    if(err < 1){
                        console.log("Submit")
                        //make a firebase call to submit the data
                        props.submit(true)
                        setTimeout(() => {
                            props.submit(false)
                        }, 3000);
                        submitdatatofirebase(props)
                    }

                }
            }
            >Submit</Button>
        </View>
        <View style={styles.button}>
            <Button
            style={styles.buttonContent}
            color='#bcece5'
            contentStyle={styles.buttonContent}
            mode='contained'
            onPress={() => {props.clear()}}
            >Clear</Button>
        </View>
        </View>
    );
    }
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '5%',
            height: '7%',
            width: '100%',
            elevation: 20,
        },
        buttonContent: {
            textAlign: 'center',
            height: '100%',
            borderWidth: 1,
            borderColor: '#aec4c7',
            backgroundColor: '#aec4c7',
            color: '#000000',
            fontSize: 20,
            fontWeight: 'bold',
            padding: '2%',
            borderRadius: 30,
            opacity: 0.8,

        },
        button: {
            width: '40%',
            backgroundColor: '#edfff5',
            marginStart: '5%',
            borderRadius: 50,
            marginEnd: '5%',
            fontFamily: 'sans-serif-condensed',
            fontSize: 20,
            fontWeight: 'bold',
            elevation: 20,
            
        },
    });
    export default Buttons;