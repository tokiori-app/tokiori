import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { Database } from '$types/database';
import { useCallback, useEffect, useState } from 'react';
import getWords from 'service/getWords';
import WordCard from '../WordCard';

type WordType = Database['public']['Tables']['words']['Row'];

const WordListTabContent = () => {
  const [words, setWords] = useState<WordType[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadWord = async () => {
    const wordsData = await getWords();
    setWords(wordsData);
  };

  useEffect(() => {
    loadWord();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadWord().finally(() => setRefreshing(false));
  }, []);

  return (
    <View style={s.container}>
      <FlatList
        data={words}
        renderItem={({ item }) => (
          <WordCard
            word={item.word}
            korean={item.korean}
            hiragana={item.hiragana}
          />
        )}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={s.flatContant}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
