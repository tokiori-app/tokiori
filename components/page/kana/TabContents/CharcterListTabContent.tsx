import { StyleSheet, Text, View } from 'react-native';

const CharcterListTabContent = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>문자 리스트 화면</Text>
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

export default CharcterListTabContent;
