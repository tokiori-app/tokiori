import { View, StyleSheet } from 'react-native';
import ROUTES from '@constant/routes';
import React, { useState } from 'react';
import LinkView from '@components/page/setting/LinkView';
import SettingHeader from '@components/page/setting/SettingHeader';
import ToggleView from '@components/page/setting/ToggleView';

const SettingScreen = () => {
  const [active, setActive] = useState<boolean>(false);
  const [active2, setActive2] = useState<boolean>(false);

  return (
    <>
      <SettingHeader title="설정" />
      <View>
        <View style={s.settingsSection}>
          <ToggleView
            title="획 가이드 표시"
            subTitle="쓰기 연습 화면의 획 가이드 보여주기"
            active={active}
            onClick={() => setActive(!active)}
          />
          <ToggleView
            title="헌국어 단어 뜻 표시"
            subTitle="단어장 속 한국어 단어 뜻을 보여주기"
            active={active2}
            onClick={() => setActive2(!active2)}
          />
        </View>
        <View style={s.linksSection}>
          <LinkView label="공지사항" link={ROUTES.NOTICE} />
          <LinkView label="리뷰 남기기" onClick={() => {}} />
        </View>
      </View>
    </>
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
