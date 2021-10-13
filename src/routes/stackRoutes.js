import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home'
import { Details } from '../screens/Details';
import { Search } from '../screens/Search';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Navigator>
            <Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false    
                }} 
            />
            <Screen 
                name="Details" 
                component={Details} 
                options={{
                    headerShown: false,
                    title: 'Detalhes',
                }} 
            />
            <Screen
                name="Search"
                component={Search}
                options={{
                    title: "Sua Busca",
                    headerTintColor: "#fff",

                    headerTitleStyle: {
                        color: "#fff"
                    },

                    headerStyle:{
                        backgroundColor: "#141a29"
                    }
                }}
            />
        </Navigator>
    );
}