import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const { Navigator, Screen } = createDrawerNavigator();

const RootDrawerNavigator = () => {
  return (
    <Navigator>
      <Screen
        name='HomeStack'
        component={HomeStack}
        options={{
          title: 'Home',
        }}
      />
      <Screen
        name='AboutStack'
        component={AboutStack}
        options={{
          title: 'About',
        }}
      />
    </Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootDrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
