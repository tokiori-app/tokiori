import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import React, { Suspense, useCallback } from 'react';
import Loading from '@components/common/Loading';
import Header from '@components/common/layout/Header';
import PrevBtn from '@components/common/layout/Header/subcomponents/PrevBtn';
import SettingBtn from '@components/common/layout/Header/subcomponents/SettingBtn';
import WordCard from '@components/page/(word)/WordCard';

const WordScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={s.container}>
      <Header>
        <Header.left>
          <PrevBtn />
        </Header.left>
        <Header.right>
          <SettingBtn />
        </Header.right>
      </Header>
      <Suspense fallback={<Loading />}>
        <FlatList
          data={[
            { id: 0, word: '新しい', korean: '새롭다', hiragana: 'あたらしい' },
            { id: 1, word: '新しい', korean: '새롭다', hiragana: 'あたらしい' },
            { id: 2, word: '新しい', korean: '새롭다', hiragana: 'あたらしい' },
          ]}
          renderItem={() => (
            <WordCard word="新しい" korean="새롭다" hiragana="あたらしい" />
          )}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={s.flatContant}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </Suspense>
    </View>
  );
};

export default WordScreen;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatContant: {
    gap: 20,
    paddingHorizontal: 16,
  },
});
