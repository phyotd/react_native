import {StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeDarkMode,
  setLoading,
  updateName,
} from '../../store/reducers/main';
import {useNavigation, useTheme} from '@react-navigation/native';
import {
  Button,
  Heading,
  NativeBaseProvider,
  ScrollView,
  Text,
  View,
} from 'native-base';

const Home = ({navigation}) => {
  const {appNm, isDarkMode} = useSelector(state => state.main);
  const naviagate = useNavigation();
  const dispatch = useDispatch();
  var {colors, padding} = useTheme();
  const backgroundColor = colors.buttonColor;
  const textColor = colors.textColor;

  const handelChangeDarkMode = e => {
    e.preventDefault();
    dispatch(changeDarkMode(!isDarkMode));
  };

  return (
    <NativeBaseProvider>
      <ScrollView
        h="80"
        _contentContainerStyle={{
          px: '20px',
          mb: '4',
          minW: '72',
        }}>
        <Heading>
          A component library for the{' '}
          <Heading color="emerald.400">React Ecosystem</Heading>
        </Heading>
        <Text pt="3" fontWeight="400">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
        <Text fontSize="4xl" color={textColor}>
          {appNm}
        </Text>
        <Text fontSize="xl" color={textColor}>
          Dark Mode: {JSON.stringify(isDarkMode)}
        </Text>

        <View style={styles.buttonContainer}>
          <Button onPress={() => naviagate.navigate('splash_screen')}>
            Splash Screen
          </Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={() => naviagate.navigate('user_list_screen')}>
            User List
          </Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="" onPress={() => naviagate.navigate('detail_screen')}>
            Detail
          </Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="" onPress={() => naviagate.navigate('contact_screen')}>
            Contact
          </Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={e => handelChangeDarkMode(e)}>Dark Mode</Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="" onPress={() => naviagate.navigate('profile_screen')}>
            Profile
          </Button>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  buttonContainer: {
    // marginVertical: 2,
    padding: 10,
  },
});
