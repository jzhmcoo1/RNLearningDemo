import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '~/screens/Home';
import About from '~/screens/About';

const screens = [
  {
    name: 'Home',
    component: Home,
    options: {
      title: 'Game Zone',
    },
  },
  {
    name: 'About',
    component: About,
    options: {
      title: 'About Game Zone',
    },
  },
];

const { Navigator, Screen } = createNativeStackNavigator();

const AboutStack = () => {
  return (
    <Navigator
      initialRouteName='About'
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
          <Screen
            key={index}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        );
      })}
    </Navigator>
  );
};

export default AboutStack;
