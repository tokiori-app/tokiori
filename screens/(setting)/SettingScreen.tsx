import { View, StyleSheet } from 'react-native';
import ROUTES from '@constant/routes';
import { useWord } from 'provider/WordProvider';
import React from 'react';
import LinkView from '@components/page/setting/LinkView';
import SettingHeader from '@components/page/setting/SettingHeader';
import ToggleView from '@components/page/setting/ToggleView';

const SettingScreen = () => {
  const { wordStorage, changeWordHandler } = useWord();
  return (
    <View>
      <SettingHeader title="설정" />
      <View>
        <View style={s.settingsSection}>
          <ToggleView
            title="획 가이드 표시"
            subTitle="쓰기 연습 화면의 획 가이드 보여주기"
            active={false}
            onClick={() => {}}
          />
          <ToggleView
            title="한국어 단어 뜻 표시"
            subTitle="단어장 속 한국어 단어 뜻을 보여주기"
            active={wordStorage}
            onClick={changeWordHandler}
          />
        </View>
        <View style={s.linksSection}>
          <LinkView label="공지사항" link={ROUTES.NOTICE} />
          <LinkView label="리뷰 남기기" onClick={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default SettingScreen;

const s = StyleSheet.create({
  settingsSection: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 20,
  },
  linksSection: {
    borderTopWidth: 2,
    borderColor: '#ccc',
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 16,
  },
});
