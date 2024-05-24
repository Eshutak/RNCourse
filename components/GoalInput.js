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
        props.closeModal();
    };

    return <Modal visible={props.visible} animationType='fade'>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput} 
                placeholder='your course goals' 
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title='Add Goal' onPress={addGoalHandler}></Button>
        </View>
    </Modal>;
}

const styles = StyleSheet.create({
    inputContainer :{
        flex : 1,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginBottom : 25,
        borderBottomWidth : 1, 
        borderBottomColor : '#cccccc',
        alignItems : 'center',
      },
      textInput : {
        padding : 8,
        marginRight : 8,
        borderWidth : 1,
        borderColor : '#cccccc',
        width: '70%'
      }, 
});

export default GoalInput;