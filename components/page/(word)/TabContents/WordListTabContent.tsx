import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import { Database } from '$types/database';
import { useCallback, useEffect, useState } from 'react';
import getWords from 'service/getWords';
import WordCard from '../WordCard';

type WordType = Database['public']['Tables']['words']['Row'];

const WordListTabContent = () => {
  const [words, setWords] = useState<WordType[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 10;

  const loadWords = async (reset = false) => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const wordsData = await getWords(reset ? 1 : page, pageSize);
      setWords((prevWords) =>
        reset ? wordsData : [...prevWords, ...wordsData],
      );
      setHasMore(wordsData.length === pageSize);
      setPage((prevPage) => (reset ? 2 : prevPage + 1));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWords(true);
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadWords(true).finally(() => setRefreshing(false));
  }, []);

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#000" />;
  };

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
        onEndReached={() => loadWords()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
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
