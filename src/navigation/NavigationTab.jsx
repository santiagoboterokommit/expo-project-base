import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens';

const { Navigator, Screen } = createBottomTabNavigator();

const NavigationTab = () => (
	<Navigator>
		<Screen name='B Music' component={Home} />
	</Navigator>
);

export default NavigationTab;
