import React from 'react';
import { Card, Title } from 'react-native-paper';

export default function CustomCard(props) {
  const { title = '', style = {}, textStyle = {}, onPress, imageSource } = props;
  return (
    <Card onPress={onPress} style={style}>
      <Card.Cover source={imageSource} />
      <Card.Content>
        <Title style={{textAlign: 'center'}}>{title}</Title>
      </Card.Content>
    </Card>
  )
}