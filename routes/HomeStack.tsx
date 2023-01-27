import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '~/screens/Home';
import ReviewDetails from '~/screens/ReviewDetails';

const screens = [
  {
    name: 'Home',
    component: Home,
    options: {
      title: 'Game Zone',
    },
  },
  {
    name: 'ReviewDetails',
    component: ReviewDetails,
    options: {
      title: 'Review Details',
    },
  },
];

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      // set default options
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {screens.map((screen, index) => {
        return (
          <Stack.Screen
            key={index}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default HomeStack;
