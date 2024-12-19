import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '@constant/color';
import t from '@constant/typography';
import BookMarkBtn from '@components/common/BookMarkBtn';
import EyesBtn from '@components/common/EyesBtn';

interface WordCardProps {
  hiragana?: string;
  word: string;
  korean: string;
}

const WordCard = ({ hiragana, word, korean }: WordCardProps) => {
  return (
    <TouchableOpacity style={s.container}>
      <EyesBtn isActive={false} />
      <BookMarkBtn isBookMark={false} />
      <View style={s.textBox}>
        {hiragana && <Text style={[t.jp14, s.jpHira]}>（{hiragana}）</Text>}
        <Text style={[t.jp24, s.jpText]}>{word}</Text>
        <Text style={[t.title3, s.jpSmall]}>{korean}</Text>
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
  jpHira: {
    color: COLORS.gray2,
  },
  jpText: {
    color: '#0090B2',
  },
  jpSmall: {
    color: COLORS.black,
  },
});
