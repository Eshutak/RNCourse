import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props){
    //compoenent 'Pressable' can make components tappable or touchable.

    // method bind is javascript standard method 
    // it means that the method will be called later.
    // first parameter is 'this' that means 'onDeleteItem'.
    return <Pressable onPress={props.onDeleteItem.bind(this, props.item)}>
        <View key={props.item.id} style={styles.goalItem}>
            <Text style={styles.goalText}> {props.item.text} </Text>
        </View>
    </Pressable>
    ;
};

export default GoalItem;

const styles = StyleSheet.create({
goalItem : {
    margin : 8,
    padding : 8 ,
    borderRadius : 6,
    backgroundColor : '#5e0acc',
    },
    goalText : {
    color : 'white',
    },
});