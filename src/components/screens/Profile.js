import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Center,
  CheckIcon,
  ChevronRightIcon,
  Flex,
  HStack,
  Icon,
  IconButton,
  MoonIcon,
  NativeBaseProvider,
  ScrollView,
  Spacer,
  SunIcon,
  VStack,
  Text,
} from 'native-base';
import {useNavigation, useTheme} from '@react-navigation/native';
import HaderTitle from '../atoms/HaderTitle';
import ActionTile from '../atoms/ActionTile';
import {useSelector} from 'react-redux';
import {AntDesign} from '@expo/vector-icons';

export default function ProfileScreen() {
  const {isDarkMode} = useSelector(state => state.main);
  const {colors} = useTheme();
  const naviagate = useNavigation();
  const iconColor = colors.iconColor;
  const textColor = colors.textColor;
  console.log('color:', colors);

  return (
    <NativeBaseProvider>
      <ScrollView
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: colors.background,
        }}>
        <View>
          <Flex direction="row" mb="2.5" mt="1.5">
            {isDarkMode ? (
              // <Button transperant>
              //   <SunIcon
              //     size="8"
              //     mt="0.5"
              //     style={{
              //       color: '#ffffff',
              //     }}
              //   />
              // </Button>
              <IconButton
                size={30}
                colorScheme="indigo"
                variant="ghost"
                _icon={{
                  as: AntDesign,
                  name: 'search1',
                }}
              />
            ) : (
              // <MoonIcon
              //   size="8"
              //   mt="0.5"
              //   style={{
              //     color: '#000000',
              //   }}
              // />
              <IconButton
                size={30}
                // colorScheme="indigo"
                variant="solid"
                _icon={{
                  as: AntDesign,
                  name: 'search1',
                }}
              />
            )}
          </Flex>
        </View>
        <View>
          <Center>
            <Avatar
              bg="green.500"
              size="2xl"
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}></Avatar>
            <Text fontSize="3xl" color={textColor}>
              User Name
            </Text>
            <Text style={styles.phoneNumber}>+959753951852</Text>
            <Box>
              <Box
                rounded={50}
                alignSelf="center"
                p="3"
                bg="blue.600"
                _text={{
                  fontSize: 'sm',
                  color: 'blue.600',
                  letterSpacing: 'lg',
                }}>
                <TouchableOpacity onPress={() => console.log('edit profile')}>
                  <HStack space={3} justifyContent="center" alignItems="center">
                    <Text style={styles.buttonStyle}>Edit Profile</Text>
                    <ChevronRightIcon
                      size="sm"
                      style={{
                        color: 'white',
                        marginRight: 10,
                      }}></ChevronRightIcon>
                  </HStack>
                </TouchableOpacity>
              </Box>
            </Box>
          </Center>
        </View>
        <View style={{marginBottom: 10}}>
          <VStack>
            <HaderTitle title="New Message"></HaderTitle>
            <HStack>
              <ActionTile
                actionIconName="person-group"
                actionName={'New Group'}></ActionTile>
            </HStack>
            <HStack>
              <ActionTile
                actionIconName={'lock'}
                actionName={'New Screct Chart'}></ActionTile>
            </HStack>
            <HStack>
              <ActionTile
                actionIconName={'lock'}
                actionName={'New Channel'}></ActionTile>
            </HStack>
          </VStack>
          <VStack>
            <HaderTitle title="Contact Features"></HaderTitle>
            <HStack>
              <ActionTile
                actionIconName={'lock'}
                actionName={'New Screct Chart'}></ActionTile>
            </HStack>
            <HStack>
              <ActionTile
                actionIconName={'lock'}
                actionName={'New Screct Chart'}></ActionTile>
            </HStack>
          </VStack>
          <VStack>
            <HaderTitle title="Others"></HaderTitle>
            <HStack>
              <ActionTile
                actionIconName={'lock'}
                actionName={'New Screct Chart'}></ActionTile>
            </HStack>
            <HStack>
              <ActionTile
                actionIconName={'lock'}
                actionName={'New Screct Chart'}></ActionTile>
            </HStack>
          </VStack>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  userName: {
    fontSize: 25,
    paddingTop: 3,
    fontWeight: '500',
  },
  phoneNumber: {
    fontSize: 16,
    paddingVertical: 3,
    marginBottom: 10,
    color: 'cyan',
  },
  buttonStyle: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    fontWeight: '600',
  },
});
