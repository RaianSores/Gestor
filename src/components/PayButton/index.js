import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

import { Button, Label } from './styles';

export default function PayButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
            ? ['#fff', '#ccc']
            : ['#0044d0', '#4B0089']
        }
        start={[1, 0.2]}
      >
        <Label focused={focused}>Dashboard</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}