import { StyleSheet, View } from 'react-native';
import { Database } from '$types/database';
import { Suspense, useEffect, useState } from 'react';
import getNotice from 'service/getNotice';
import Loading from '@components/common/Loading';
import DropDown from '@components/page/setting/DropDown';
import SettingHeader from '@components/page/setting/SettingHeader';

type NoticeType = Database['public']['Tables']['notices']['Row'];

const NoticeScreen = () => {
  const [notices, setNotices] = useState<NoticeType[]>([]);

  useEffect(() => {
    const loadNotice = async () => {
      const noticeData = await getNotice();
      if (noticeData) {
        setNotices((prev) => [...prev, ...noticeData]);
      }
    };
    loadNotice();
  }, []);

  return (
    <View style={s.container}>
      <SettingHeader title="공지사항" />
      <Suspense fallback={<Loading />}>
        {notices.map((notice, index) => (
          <DropDown key={index} item={notice} index={index} />
        ))}
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
