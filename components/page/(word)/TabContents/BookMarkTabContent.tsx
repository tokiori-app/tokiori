import { StyleSheet, Text, View } from 'react-native';

const BookMarkTabContent = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>미니게임 화면</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default BookMarkTabContent;
