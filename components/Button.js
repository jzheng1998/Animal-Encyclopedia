import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Button(props) {
  const { title = '', style = {}, textStyle = {}, onPress, disabled } = props;

  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
      <Text style={textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
}
