import 'react-native-gesture-handler'

import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Categoria from './pages/Categorias';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes from './routes';
import { AutenticacaoProvider } from './context/AutenticacaoContext';


export default () => {


    return (
        <AutenticacaoProvider>

            <Routes />
        </AutenticacaoProvider>

    );
}