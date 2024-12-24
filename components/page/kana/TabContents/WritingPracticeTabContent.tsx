import { StyleSheet, Text, View } from 'react-native';

const WritingPracticeTabContent = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>쓰기 연습 화면</Text>
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

export default WritingPracticeTabContent;
