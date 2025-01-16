import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WordType } from '$types/word';
import COLORS from '@constant/color';
import t from '@constant/typography';
import { useBook } from 'provider/BookProvider';
import { useWord } from 'provider/WordProvider';
import { useEffect, useState } from 'react';
import readerHandler from 'service/Reader';
import BookMarkBtn from '@components/common/BookMarkBtn';
import EyesBtn from '@components/common/EyesBtn';

interface WordCardProps {
  item: WordType;
}

const WordCard = ({ item }: WordCardProps) => {
  const { hiragana, word, korean, id } = item;
  const { wordStorage } = useWord();
  const { books, changeBookHandler } = useBook();
  const isBookMarked = books.some((el) => el.id === id);
  const [activeWord, setActiveWord] = useState(wordStorage);
  useEffect(() => {
    setActiveWord(wordStorage);
  }, [wordStorage]);
  return (
    <TouchableOpacity
      style={s.container}
      onPress={() => readerHandler.playSound(word)}
    >
      <EyesBtn
        isActive={activeWord}
        onClick={() => setActiveWord(!activeWord)}
      />
      <BookMarkBtn
        isBookMark={isBookMarked}
        onClick={() => changeBookHandler(item)}
      />
      <View style={s.textBox}>
        {hiragana && <Text style={[t.jp14, s.jpHira]}>({hiragana})</Text>}
        <Text style={[t.jp24, s.jpText]}>{word}</Text>
        {!activeWord && <Text style={[t.title3, s.jpSmall]}>{korean}</Text>}
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
