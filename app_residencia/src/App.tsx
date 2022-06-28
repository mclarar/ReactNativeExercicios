import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Login  from './pages/Login';
import Home from './pages/Home';
import Categoria from './pages/Categorias';
import { createDrawerNavigator } from '@react-navigation/drawer';


const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator =()=>{
    return(
    <TabNavigation.Navigator screenOptions={{
        headerShown:false,
        tabBarStyle:{backgroundColor: '#35347E', borderBottomWidth:0,}
    }}>
        <TabNavigation.Screen
         name='HomeTabScreen' 
         component={Home}/>
        <TabNavigation.Screen 
        name='CategoriasTabScreen' 
        component={Categoria}/>
    </TabNavigation.Navigator>
    )
}

const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer =()=>{
    return(
    <DrawerNavigation.Navigator>
        <DrawerNavigation.Screen 
        name="TabNavigationScreen" 
        options={{title:'Home Principal'}}
        component={BottomTabNavigator}/>
        <DrawerNavigation.Screen
        name="CategoriasDrawerScreen"
        component={Categoria}/>
    </DrawerNavigation.Navigator>
)
}
const StackNavigation = createNativeStackNavigator();
export default ()=>{
 
  return (

    // <Home/>
    <NavigationContainer>
        <StackNavigation.Navigator>
            <StackNavigation.Screen
                options={{headerShown: false}}
                name='Login'
                component={Login}
            />
            <StackNavigation.Screen
                options={{headerShown: false}}
                name='Home'
                component={NavigationDrawer}
            />
        </StackNavigation.Navigator>
    </NavigationContainer>
);
}