import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './component/home/home'
import Main from './component/main/main'
import Prof from './component/profile/profile';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ Home }
        options={{title:'overview',}}
        />
        <Stack.Screen name="Home1" component={Main} />
        <Stack.Screen name="Home2" component={Main} />
        <Stack.Screen name="Prof" component={Prof} />
        <Stack.Screen name="Home4" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;