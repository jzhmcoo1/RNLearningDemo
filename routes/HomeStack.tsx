import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from '~/screens/About';
import Home from '~/screens/Home';
import ReviewDetails from '~/screens/ReviewDetails';

const screens = [
  {
    name: 'About',
    component: About,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'ReviewDetails',
    component: ReviewDetails,
  },
];

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {screens.map((screen, index) => {
          return (
            <Stack.Screen
              key={index}
              name={screen.name}
              component={screen.component}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
