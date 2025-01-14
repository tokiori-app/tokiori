import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import { useBook } from '@provider/BookProvider';
import { useState } from 'react';
import BookMarkTabContent from '@components/page/(word)/TabContents/BookMarkTabContent';
import MinigameTabContent from '@components/page/(word)/TabContents/MinigameTabContent';
import WordListTabContent from '@components/page/(word)/TabContents/WordListTabContent';
import WordHeader from '@components/page/(word)/WordHeader';
import KanaMenuTabBar from '@components/page/kana/KanaMenuTabBar';

const renderScene = SceneMap({
  word: WordListTabContent,
  bookmark: BookMarkTabContent,
  miniGame: MinigameTabContent,
});

const WordScreen = () => {
  const { books } = useBook();

  const routes = [
    { key: 'word', title: '단어장' },
    { key: 'bookmark', title: `북마크(${books.length})` },
    { key: 'miniGame', title: '미니게임' },
  ];

  const layout = useWindowDimensions();
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <View style={s.container}>
      <WordHeader />
      <TabView
        navigationState={{ index: tabIndex, routes }}
        renderScene={renderScene}
        onIndexChange={setTabIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={KanaMenuTabBar}
      />
    </View>
  );
};

export default WordScreen;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
