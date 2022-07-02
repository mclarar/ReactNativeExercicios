import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, withBadge, Badge } from "react-native-elements";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Categoria from "../pages/Categorias";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Produto from "../pages/Produtos";
import Carrinho from "../pages/Carrinho";
import { CartContext } from "../context/CartContext";


const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const { CountCart } = useContext(CartContext);

  const BadgeIcon = withBadge(CountCart())(Icon);

  return (
    <TabNavigation.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#292841', borderBottomWidth: 0, }
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
      <TabNavigation.Screen
        name='CarrinhoScreen'
        component={Carrinho}
        options={{
          tabBarIcon: () => (
            <BadgeIcon name='shopping-cart' type='font-awesome' size={24} color='#000' />
          ),
          title: 'Carrinho'
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
        options={{ title: 'Home ' }}
        component={BottomTabNavigator} />
      <DrawerNavigation.Screen
        name="CategoriasDrawerScreen"
        options={{ title: 'Categorias' }}
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
        <StackNavigation.Screen
          options={{ headerShown: false }}
          name="ProdutoScreen"
          component={Produto}
        />
      </StackNavigation.Navigator>

    </NavigationContainer>


  );
}

export default Routes;