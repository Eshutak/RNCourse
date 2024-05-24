import { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props){

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
        props.onCancel();
    };

    return <Modal visible={props.visible} animationType='fade'>
        
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require("../assets/images/goal.png")}/>
            <TextInput 
                style={styles.textInput} 
                placeholder='your course goals' 
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Add Goal' onPress={addGoalHandler} color={"#b180f0"}/>
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel} color={"#f31282"}/>
                </View>
            </View>
        </View>
    </Modal>;
}

const styles = StyleSheet.create({
    inputContainer :{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 16,
        backgroundColor : '#311b6b',
    },
    textInput : {
        padding : 8,
        marginRight : 8,
        borderWidth : 1,
        borderColor : '#e4d0ff',
        backgroundColor : '#e4d0ff',
        borderRadius : 6,
        color : '#120348',
        width: '100%'
      }, 
      buttonContainer : {
        flexDirection : 'row',
        marginTop : 16,
      },
      button : {
        width : 100,
        marginHorizontal : 8,
      },   
      image : {
        width : 100,
        height : 100,
      }
});

export default GoalInput;