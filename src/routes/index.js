import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactScreen from '../components/screens/contact';
import Home from '../components/screens/Home';
import SplashScreen from '../components/screens/Splash';
import UserListScreen from '../components/screens/UserList';
import DetailScreen from '../components/screens/Detail';
import ProfileScreen from '../components/screens/Profile';
import {localDarkTheme} from '../theme/local_dark_theme';
import {localDefaultTheme} from '../theme/local_default_theme';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const {isDarkMode} = useSelector(state => state.main);

  return (
    <NavigationContainer
      theme={isDarkMode ? localDarkTheme : localDefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="home_scrren"
          component={Home}
          options={{title: 'Home', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="contact_screen"
          component={ContactScreen}
          options={{title: 'Contact', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="user_list_screen"
          component={UserListScreen}
          options={{title: 'Users', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="detail_screen"
          component={DetailScreen}
          options={{title: 'Detail', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="splash_screen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="profile_screen"
          component={ProfileScreen}
          options={{title: 'Profile', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
