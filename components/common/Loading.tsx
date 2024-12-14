import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loading = () => {
  return (
    <View style={s.inset}>
      <ActivityIndicator />
    </View>
  );
};

export default Loading;

const s = StyleSheet.create({
  inset: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
