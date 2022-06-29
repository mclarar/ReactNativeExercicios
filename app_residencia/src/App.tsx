import 'react-native-gesture-handler'

import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Categoria from './pages/Categorias';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes from './routes';
import { AutenticacaoProvider } from './context/AutenticacaoContext';
import { LoadingProvider } from './context/LoadingContext';


export default () => {


    return (
        <LoadingProvider>
            <AutenticacaoProvider>

                <Routes />
            </AutenticacaoProvider>
        </LoadingProvider>


    );
}