import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useState } from 'react';
import KanaHeader from '@components/page/kana/KanaHeader';
import KanaMenuTabBar from '@components/page/kana/KanaMenuTabBar';
import CharcterListTabContent from '@components/page/kana/TabContents/CharcterListTabContent';
import MinigameTabContent from '@components/page/kana/TabContents/MinigameTabContent';
import WritingPracticeTabContent from '@components/page/kana/TabContents/WritingPracticeTabContent';

/* routes 요거도 나중에 따로 상수처리하거나 할듯 */
const routes = [
  { key: 'character', title: '문자 리스트' },
  { key: 'write', title: '쓰기 연습' },
  { key: 'miniGame', title: '미니게임' },
];

const renderScene = SceneMap({
  character: CharcterListTabContent,
  write: WritingPracticeTabContent,
  miniGame: MinigameTabContent,
});

const KatakanaScreen = () => {
  const layout = useWindowDimensions();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <View style={s.container}>
      <KanaHeader />

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

export default KatakanaScreen;

const s = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
});
