import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '~/styles/global';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function ReviewDetails({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>ReviewDetails</Text>
      <Text style={globalStyles.titleText}>{JSON.stringify(route.params)}</Text>
    </View>
  );
}
