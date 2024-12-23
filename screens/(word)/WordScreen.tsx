import { View, StyleSheet } from 'react-native';
import React, { lazy, Suspense } from 'react';
import Loading from '@components/common/Loading';
import Header from '@components/common/layout/Header';
import PrevBtn from '@components/common/layout/Header/subcomponents/PrevBtn';
import SettingBtn from '@components/common/layout/Header/subcomponents/SettingBtn';

const WordList = lazy(() => import('@components/page/(word)/WordList'));

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
      <Suspense fallback={<Loading />}>
        <WordList />
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
