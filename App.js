import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';



export default function App() {
  const [text, onChangeText] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  function AddTodo(){
    text != '' ? setTodos(text) : null
    console.log(todos);
    onChangeText("");
  }

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
          <Button title='Add' onPress={AddTodo}/>
        </View>
        <View style={{marginTop:30}}>
          {todos.map((todo,idx)=>(
            <View  key={idx} style={styles.todo}>
              <Text >{todo}</Text>
              <Button title='delete' style={{width:50}} onPress={()=>todos.splice(idx,1)}/>
            </View>
            ))}
          
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
  todo:{
    flexDirection : 'row',
    justifyContent:'space-between',
    fontSize:20,
    paddingTop:20,
    paddingRight:20
  }
});
