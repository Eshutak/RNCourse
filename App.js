import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    console.log(enteredGoalText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your course goals' onChangeText={goalInputHandler}></TextInput>
        <Button title='Add Goal' onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
      </View>
      {/* 
        View is applied flex box css basically
        flex box has a main asix
        and the main asix is defined by box's flex direction (css attribute)

        justify -> main asix
        align -> cross asix
      
      <View style={styles.flexBoxArea}>
        <View style={{backgroundColor:'red'}}>
          <Text>1</Text>
        </View>
        <View style={{backgroundColor:'blue'}}>
          <Text>2</Text>
        </View>
        <View style={{backgroundColor:'green'}}>
          <Text>3</Text>
        </View>
      </View>
    */}
    </View>

  );
}

const styles = StyleSheet.create({
  appContainer : {
    padding : 50,
    flex : 1,
  },
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
  goalsContainer : {
    flex: 5 ,
  },
  flexBoxArea : {
    display : 'flex',
    justifyContent : 'space-around',
    alignItems : 'center',
    flexDirection : 'row',
    height : 300,
  }


});
