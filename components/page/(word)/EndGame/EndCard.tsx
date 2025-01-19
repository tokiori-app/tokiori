import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLORS from '@constant/color';
import t from '@constant/typography';
import { ReactNode } from 'react';

interface EndCardProps {
  isActive?: boolean;
  onPress?: () => void;
  children: ReactNode;
}

const EndCard = ({ isActive, onPress, children }: EndCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[s.container, isActive && s.activeBorder]}>{children}</View>
    </TouchableOpacity>
  );
};

interface EndCardWordProps {
  hiragana?: string;
  word: string;
}

const EndCardWord = ({ hiragana, word }: EndCardWordProps) => {
  return (
    <View style={s.cardBox}>
      {hiragana && <Text style={[s.jpHira, t.jp14]}>({hiragana})</Text>}
      <Text style={[s.jpText, t.jp24]}>{word}</Text>
    </View>
  );
};

interface EndCardKorProps {
  korean: string;
}

const EndCardKor = ({ korean }: EndCardKorProps) => {
  return <Text style={t.heading1}>{korean}</Text>;
};

EndCard.Word = EndCardWord;
EndCard.Kor = EndCardKor;

export default EndCard;

const s = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    backgroundColor: COLORS.secondary,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 60,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  activeBorder: {
    borderColor: COLORS.main,
  },
  cardBox: {
    alignItems: 'center',
  },
  jpHira: {
    color: COLORS.gray2,
  },
  jpText: {
    color: '#0090B2',
  },
});
