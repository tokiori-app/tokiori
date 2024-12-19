import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Header from '@components/common/layout/Header';
import PrevBtn from '@components/common/layout/Header/subcomponents/PrevBtn';
import SettingBtn from '@components/common/layout/Header/subcomponents/SettingBtn';
import WordCard from '@components/page/(word)/WordCard';

const WordScreen = () => {
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
      <FlatList
        data={[0, 1, 2, 3]}
        renderItem={(props) => <WordCard />}
        contentContainerStyle={s.flatContant}
      />
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
