import { View } from 'react-native';
import { supabase } from 'lib/supabase';
import { useEffect, useState } from 'react';
import DropDown from '@components/page/setting/DropDown';

interface NoticeType {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const NoticeScreen = () => {
  const [notices, setNotices] = useState<NoticeType[]>([]);

  useEffect(() => {
    getNotice();
  }, []);

  const getNotice = async () => {
    const { data } = await supabase
      .from('notices')
      .select()
      .returns<NoticeType[]>();
    if (data) setNotices(data);
  };

  return (
    <View>
      {notices.map((notice, index) => (
        <DropDown key={index} item={notice} index={index} />
      ))}
    </View>
  );
};

export default NoticeScreen;
