import { ScrollView, StyleSheet, View } from 'react-native';
import { useBook } from '@provider/BookProvider';
import Empty from '@components/common/Empty';
import WordCard from '../WordCard';

const BookMarkTabContent = () => {
  const { books } = useBook();
  return (
    <View style={s.container}>
      {books.length > 0 ? (
        <ScrollView contentContainerStyle={s.flatContant}>
          {books.map((book) => (
            <WordCard key={book.id} item={book} />
          ))}
        </ScrollView>
      ) : (
        <Empty text="북마크한 단어가 없어요" />
      )}
    </View>
  );
};

export default BookMarkTabContent;

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  flatContant: {
    gap: 20,
    paddingTop: 32,
    paddingBottom: 42,
  },
});
