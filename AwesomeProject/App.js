import React, { Component } from 'react';
import { Text } from 'react-native';
import { TextInput } from 'react-native';
import { Image } from 'react-native';
import { Alert, Button, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import { SectionList } from 'react-native';
import { ActivityIndicator } from 'react-native';

export default function PizzaTranslator() {
  const [text, setText] = State('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  );
}