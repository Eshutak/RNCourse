import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

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
            <TextInput 
                style={styles.textInput} 
                placeholder='your course goals' 
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Add Goal' onPress={addGoalHandler}></Button>
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel}></Button>
                </View>
            </View>
        </View>
    </Modal>;
}

const styles = StyleSheet.create({
    inputContainer :{
        flex : 1,
        display : 'flex',
        justifyContent : 'center',
        marginBottom : 24,
        borderBottomWidth : 1, 
        borderBottomColor : '#cccccc',
        alignItems : 'center',
        padding : 16,
      },
      textInput : {
        padding : 8,
        marginRight : 8,
        borderWidth : 1,
        borderColor : '#cccccc',
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
});

export default GoalInput;