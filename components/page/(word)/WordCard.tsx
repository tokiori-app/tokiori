import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '@constant/color';
import t from '@constant/typography';
import BookMarkBtn from '@components/common/BookMarkBtn';
import EyesBtn from '@components/common/EyesBtn';

const WordCard = () => {
  return (
    <TouchableOpacity style={s.container}>
      <EyesBtn isActive={false} />
      <BookMarkBtn isBookMark={false} />
      <View style={s.textBox}>
        <Text style={[t.jp24, s.jpText]}>新しい</Text>
        <Text style={[t.title3, s.jpSmall]}>새롭다</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WordCard;

const s = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: COLORS.main,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    backgroundColor: COLORS.secondary,
  },
  textBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  jpText: {
    color: '#0090B2',
  },
  jpSmall: {
    color: COLORS.black,
  },
});
