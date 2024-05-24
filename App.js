import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [enteredGoalTextList, setEnteredGoalTextList] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    setEnteredGoalTextList((currentCourseGoals)=>[... enteredGoalTextList, 
      {id : Math.random().toString(), text : enteredGoalText}
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your course goals' onChangeText={goalInputHandler}></TextInput>
        <Button title='Add Goal' onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
        {
          /*
            ScrollView : FlatList 
            FlatList render a few items that are displayed screen.
            so FlatList is more effective Component.
            and FlatList provides .map method by attribute data and randerItem
          */
        }
        <FlatList 
          data={ enteredGoalTextList} 
          renderItem={(itemData)=>{ //itemData is element of enteredGoalTextList wrapped by FlatList.
            return <View key={itemData.item.id} style={styles.goalItem}>
              <Text style={styles.goalText}> {itemData.item.text} </Text>
            </View>;
          }}
          alwaysBounceVertical={false}
        />
        {/* 
        <ScrollView alwaysBounceVertical={false}>
        {
          enteredGoalTextList.map((goal,i)=>
            
              below code isn't same display.
              in android the border radius is work. but not in iOS.
              so we have to control this situation by wrapping
              <View> component.
              and add goal text style.
                
            <Text key={i} style={styles.goalItem}>
                {goal}
            </Text>
            
            <View key={i} style={styles.goalItem}>
              <Text style={styles.goalText}> {goal} </Text>
            </View>
          )
        }
        </ScrollView>
        */
      }
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
  goalItem : {
    margin : 8,
    padding : 8 ,
    borderRadius : 6,
    backgroundColor : '#5e0acc',
  },
  goalText : {
    color : 'white',
  },
  flexBoxArea : {
    display : 'flex',
    justifyContent : 'space-around',
    alignItems : 'center',
    flexDirection : 'row',
    height : 300,
  }


});
