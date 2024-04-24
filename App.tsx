import Weather from './Weather'
import Welcome from './Welcome'

import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Entypo } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
	const Tab = createBottomTabNavigator();
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
					name="Welcome" 
					component={Welcome}
					options={{headerShown: false}}
				/>
				<Stack.Screen 
					name="Weather" 
					component={Weather} 
					// options={{headerShown: false}}
				/>
		  	</Stack.Navigator>
		</NavigationContainer>
	);
}
