import { View, Text } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native';

export default function Input() {
    const [text, setText] = useState("");
  return (
    <View>
        <TextInput
            placeholder="Type here"
            onChangeText={text => setText(text)}
            value={text}
        />
      <Text>Input: {text}</Text>
    </View>
  )
}