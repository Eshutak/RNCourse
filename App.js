import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/*define style by inline */}
      <Text>this is first my app .</Text>
      
      {/*
        define style by inline 
        defining style is similar to CSS language. but not all same.
      */} 
      <Text style={{margin : 16, padding : 16, borderColor: "red", borderWidth : 1}}> another text.</Text>
      <Button title="tap me!"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText : {
    margin : 16, 
    padding : 16, 
    borderColor: "red", 
    borderWidth : 1
  }
});
