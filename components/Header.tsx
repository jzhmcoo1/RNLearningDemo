import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Header() {
  return (
    <>
      <SafeAreaView style={styles.header}></SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    // paddingTop: 38,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
