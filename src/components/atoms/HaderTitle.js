import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Box, NativeBaseProvider} from 'native-base';

export default function HaderTitle({title}) {
  return (
    <NativeBaseProvider>
      <View style={{flex: 1, paddingVertical:8}}>
        <Box
          bg="#f7f7f7"
          p="3"
          rounded={10}
          _text={{
            fontSize: 'sm',
            fontWeight: 'semibold',
            color: 'light.600',
            textAlign: 'left',
            textTransform: 'uppercase',
            letterSpacing: '2',
          }}>
          {title}
        </Box>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
