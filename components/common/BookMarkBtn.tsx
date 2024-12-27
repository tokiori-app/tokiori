import { Pressable, StyleSheet } from 'react-native';
import BookMark from '@assets/icons/bookmark.svg';
import COLORS from '@constant/color';

interface BookMarkBtnProps {
  isBookMark: boolean;
  onClick: () => void;
}

const BookMarkBtn = ({ isBookMark, onClick }: BookMarkBtnProps) => {
  return (
    <Pressable onPress={onClick} style={s.rightBtn}>
      <BookMark color={isBookMark ? '#f5888d8c' : COLORS.secondary} />
    </Pressable>
  );
};

export default BookMarkBtn;

const s = StyleSheet.create({
  rightBtn: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
});
