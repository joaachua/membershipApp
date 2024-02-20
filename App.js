import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

import Home from './src/components/dashboard/Home/Home';
import Listing from './src/components/dashboard/Listing/Listing';
import Shop from './src/components/dashboard/Shop/Shop';
import Wishlist from './src/components/dashboard/Wishlist/Wishlist';
import Profile from './src/components/dashboard/Profile/Profile';

import { styles } from './src/styles/main';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar style="auto"/>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconComponent;

              if (route.name === 'Home') {
                iconComponent = <MaterialCommunityIcons name="home-outline" size={size} color={color} />;
              } else if (route.name === 'Listing') {
                iconComponent = <MaterialCommunityIcons name="magnify" size={size} color={color} />;
              } else if (route.name === 'Shop') {
                iconComponent = <MaterialCommunityIcons name="cart-plus" size={size} color={color} />;
              } else if (route.name === 'Wishlist') {
                iconComponent = <MaterialCommunityIcons name="heart-outline" size={size} color={color} />;
              } else if (route.name === 'Profile') {
                iconComponent = <Ionicons name="person-outline" size={size} color={color} />;
              }

              return iconComponent;
            },
            "tabBarActiveTintColor": 'tomato',
            "tabBarinactiveTintColor": 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Tab.Screen name="Listing" component={Listing} options={{ headerShown: false }}/>
          <Tab.Screen name="Shop" component={Shop} options={{ headerShown: false }}/>
          <Tab.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }}/>
          <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
