import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';


export default function App() {
  const [text, onChangeText] = React.useState('');
  return (
   <View style={styles.body}>
    <StatusBar />
      <View style={styles.App}>
        <Text style={{fontSize:30}}>Todo List</Text>
        <View style={styles.input}>
          <TextInput 
            value={text} 
            style={styles.inputField} 
            onChangeText={onChangeText}
            placeholder='Todo'
          />
          <Button title='Add'/>
        </View>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection:'column',
    justifyContent: "start",
    alignItems: "start",
    backgroundColor:"lightgrey",
  },
  App:{
    padding:20,
    top:40,
    left:20,
  },
  input:{
    marginTop: 20,
    justifyContent:'start',
    flexDirection:'row',
  },
  inputField: {
    height: 40,
    borderWidth: 0.5,
    padding: 10,
    width:250,
  },
});
