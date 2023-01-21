import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

interface AddTodoProps {
  submitHandler: (text: string) => void;
}

export default function AddTodo({submitHandler}:AddTodoProps) {
  const [text, setText] = useState('');

  const changeHandler = (val: string) => {
    setText(val);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Add todo...'
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => {
          submitHandler(text)
          setText('');
        }}
        title='Add Todo'
        color='coral'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  }
})
