import { StyleSheet, View } from 'react-native';
import { Suspense } from 'react';
import Loading from '@components/common/Loading';
import Notice from '@components/page/notice/Notice';
import SettingHeader from '@components/page/setting/SettingHeader';

const NoticeScreen = () => {
  return (
    <View style={s.container}>
      <SettingHeader title="공지사항" />
      <Suspense fallback={<Loading />}>
        <Notice />
      </Suspense>
    </View>
  );
};

export default NoticeScreen;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
