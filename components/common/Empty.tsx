import { View, Text, StyleSheet } from 'react-native';
import t from '@constant/typography';

const Empty = ({ isFull, text }: { isFull?: boolean; text: string }) => {
  return (
    <View style={!isFull && s.full}>
      <Text style={t.heading2}>{text}</Text>
    </View>
  );
};

export default Empty;

const s = StyleSheet.create({
  full: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
