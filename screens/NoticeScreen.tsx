import { View, Text, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';

const NoticeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('notices')
      .onSnapshot((querySnapshot) => {
        const notices: Notice[] = [];

        querySnapshot.forEach((documentSnapshot) => {
          notices.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          } as Notice);
        });

        setNotices(notices);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>로딩중</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={notices}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.desc}</Text>
        </View>
      )}
    />
  );
};

export default NoticeScreen;

interface Notice {
  createAt: string;
  desc: string;
  key: string;
  title: string;
}
