import { Pressable, StyleSheet } from 'react-native';
import BookMark from '@assets/icons/bookmark.svg';
import COLORS from '@constant/color';
import { useState } from 'react';

interface BookMarkBtnProps {
  isBookMark: boolean;
}

const BookMarkBtn = ({ isBookMark }: BookMarkBtnProps) => {
  const [active, setActive] = useState(isBookMark);

  const clickHandler = () => {
    setActive(!active);
  };

  return (
    <Pressable onPress={clickHandler} style={s.rightBtn}>
      <BookMark color={active ? '#f5888d8c' : COLORS.secondary} />
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
