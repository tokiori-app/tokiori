import { FlatList, StyleSheet, View } from 'react-native';
import { Database } from '$types/database';
import { useEffect, useState } from 'react';
import getWords from 'service/getWords';
import WordCard from '../WordCard';

type WordType = Database['public']['Tables']['words']['Row'];

const WordListTabContent = () => {
  const [words, setWords] = useState<WordType[]>([]);
  const [page] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const loadWords = async (reset = false) => {
      const wordsData = await getWords(reset ? 1 : page, pageSize);
      if (wordsData) {
        setWords((prevWords) =>
          reset ? wordsData : [...prevWords, ...wordsData],
        );
      }
    };
    loadWords();
  }, []);

  return (
    <View style={s.container}>
      <FlatList
        data={words}
        renderItem={({ item }) => <WordCard item={item} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={s.flatContant}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default WordListTabContent;

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  flatContant: {
    gap: 20,
    paddingTop: 32,
    paddingBottom: 42,
  },
});
