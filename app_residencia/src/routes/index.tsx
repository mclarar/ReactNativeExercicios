import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-elements";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Categoria from "../pages/Categorias";
import { createDrawerNavigator } from "@react-navigation/drawer";


const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <TabNavigation.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#35347E', borderBottomWidth: 0, }
    }}>
      <TabNavigation.Screen
        name="HomeTabScreen"
        component={Home}
        options={{
          tabBarIcon: () => {
            return (
              <Icon name="home" color="#e4e4e4" type="font-awesome" size={24} />
            );
          },
        }}
      />
      <TabNavigation.Screen
        name='Categorias'
        component={Categoria}
        options={{
          tabBarIcon: () => {
            return (
              <Icon name="bars" color="#e4e4e4" type="font-awesome" size={24} />
            );
          },
        }} />
    </TabNavigation.Navigator>
  )
}

const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer = () => {
  return (
    <DrawerNavigation.Navigator>
      <DrawerNavigation.Screen
        name="TabNavigationScreen"
        options={{ title: 'Home Principal' }}
        component={BottomTabNavigator} />
      <DrawerNavigation.Screen
        name="CategoriasDrawerScreen"
        component={Categoria} />
    </DrawerNavigation.Navigator>
  )
}
const StackNavigation = createNativeStackNavigator();
// export type StackParamList = {
//     Home: { token: string };
//     Login: undefined;
// }
const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen
          options={{ headerShown: false }}
          name='Login'
          component={Login}
        />
        <StackNavigation.Screen
          options={{ headerShown: false }}
          name='Home'
          component={NavigationDrawer}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>


  );
}

export default Routes;