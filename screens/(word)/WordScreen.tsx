import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import React, { lazy, Suspense, useState } from 'react';
import Loading from '@components/common/Loading';
import Header from '@components/common/layout/Header';
import PrevBtn from '@components/common/layout/Header/subcomponents/PrevBtn';
import SettingBtn from '@components/common/layout/Header/subcomponents/SettingBtn';
import BookMarkTabContent from '@components/page/(word)/TabContents/BookMarkTabContent';
import KanaMenuTabBar from '@components/page/kana/KanaMenuTabBar';
import MinigameTabContent from '@components/page/kana/TabContents/MinigameTabContent';

const WordListTabContent = lazy(
  () => import('@components/page/(word)/TabContents/WordListTabContent'),
);

/* routes 요거도 나중에 따로 상수처리하거나 할듯 */
const routes = [
  { key: 'word', title: '단어장' },
  { key: 'bookmark', title: '북마크' },
  { key: 'miniGame', title: '미니게임' },
];

const renderScene = SceneMap({
  word: WordListTabContent,
  bookmark: BookMarkTabContent,
  miniGame: MinigameTabContent,
});

const WordScreen = () => {
  const layout = useWindowDimensions();
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <View style={s.container}>
      <Header>
        <Header.Left>
          <PrevBtn />
        </Header.Left>
        <Header.Right>
          <SettingBtn />
        </Header.Right>
      </Header>
      <Suspense fallback={<Loading />}>
        <TabView
          navigationState={{ index: tabIndex, routes }}
          renderScene={renderScene}
          onIndexChange={setTabIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={KanaMenuTabBar}
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
});
