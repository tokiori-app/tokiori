import { View, Text, Pressable, StyleSheet } from 'react-native';
import COLORS from '@constant/color';
import t from '@constant/typography';
import React from 'react';

const WordCard = () => {
  return (
    <View style={s.container}>
      <Pressable style={s.leftBtn}>
        <Text>버튼1</Text>
      </Pressable>
      <Pressable style={s.rightBtn}>
        <Text>버튼2</Text>
      </Pressable>

      <View style={s.textBox}>
        <Text style={[t.jp24, s.jpText]}>新しい</Text>
        <Text style={[t.title3, s.jpSmall]}>새롭다</Text>
      </View>
    </View>
  );
};

export default WordCard;

const s = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: COLORS.main,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    backgroundColor: COLORS.secondary,
  },
  leftBtn: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
  rightBtn: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  textBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  jpText: {
    color: '#0090B2',
  },
  jpSmall: {
    color: COLORS.black,
  },
});
