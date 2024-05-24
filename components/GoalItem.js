import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props){
    //compoenent 'Pressable' can make components tappable or touchable.

    // method bind is javascript standard method 
    // it means that the method will be called later.
    // first parameter is 'this' that means 'onDeleteItem'.

    //android_ripple -> when component is touched component border's style is changed by difined style.
    //in case iOS, use 'style' attribute of 'Pressable' conditionally.
    //in the style definition, we can get pressed status information by 'pressed'.
    return (<View key={props.item.id} style={styles.goalItem}>
            <Pressable 
                android_ripple={{color:'#210644'}}
                onPress={props.onDeleteItem.bind(this, props.item)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}> {props.item.text} </Text>
            </Pressable>
        </View>
    );
    
    
    
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem : {
        margin : 8,
        borderRadius : 6,
        backgroundColor : '#5e0acc',

    },
    pressedItem : {
        opacity : 0.5,
        backgroundColor:'#210644',
    }, 
    goalText : {
        color : 'white',
        padding : 8 ,
    },
});