import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ChevronRightIcon,
  Flex,
  Icon,
  NativeBaseProvider,
  Spacer,
} from 'native-base';
import {useTheme} from '@react-navigation/native';
import {Entypo} from '@native-base/icons';

export default function ActionTile({actionIconName, actionName}) {
  const {colors} = useTheme();
  const _color = colors.textColor;
  const iconColor = colors.iconColor;

  return (
    <NativeBaseProvider>
      <View style={{flex: 1, paddingVertical: 5,marginHorizontal:15}}>
        <Flex direction="row" mb="2.5" mt="1.5">
          <Icon
            as={Entypo}
            name="user"
            color={iconColor}
            style={{marginHorizontal: 5}}
          />
          <Text style={{color: _color, marginLeft: 5}}>{actionName}</Text>
          <Spacer />
          <ChevronRightIcon
            style={{
              color: '#000000',
              marginRight: 10,
            }}></ChevronRightIcon>
        </Flex>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  actionName: {
    color: 'black',
  },
});
