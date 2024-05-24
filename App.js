import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  //const [enteredGoalText, setEnteredGoalText] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [enteredGoalTextList, setEnteredGoalTextList] = useState([]);
  /*
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    setEnteredGoalTextList((currentCourseGoals)=>[... enteredGoalTextList, 
      {id : Math.random().toString(), text : enteredGoalText}
    ]);
  }
  */

  function modalAddGoal(){
    setModalIsVisible(true);
  }

  function closeAddGoal(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText){
    setEnteredGoalTextList((currentCourseGoals)=>[... enteredGoalTextList, 
      {id : Math.random().toString(), text : enteredGoalText}
    ]);
  }

  function deleteGoalHandler(target){
    //console.log('delete ');
    setEnteredGoalTextList((currentCourseGoals)=>
      currentCourseGoals.filter((item) => {
        return item.id !== target.id;
      })
    );
  }

  return (
    <View style={styles.appContainer}>
      {/* 
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your course goals' onChangeText={goalInputHandler}></TextInput>
        <Button title='Add Goal' onPress={addGoalHandler}></Button>
      </View> 
      */}
      <Button title="Add New Goal" onPress={modalAddGoal}/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} closeModal={closeAddGoal}/>
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
            // return <View key={itemData.item.id} style={styles.goalItem}>
            //   <Text style={styles.goalText}> {itemData.item.text} </Text>
            // </View>;
            // above codes can changes below code
            // for capsulization.
            return <GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler}/>
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
