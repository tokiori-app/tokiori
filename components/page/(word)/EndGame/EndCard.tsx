import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLORS from '@constant/color';
import t from '@constant/typography';
import { ReactNode } from 'react';

interface EndCardProps {
  onPress?: () => void;
  children: ReactNode;
}

const EndCard = ({ onPress, children }: EndCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={s.container}>{children}</View>
    </TouchableOpacity>
  );
};

interface EndCardWordProps {
  hiragana?: string;
  word: string;
}

const EndCardWord = ({ hiragana, word }: EndCardWordProps) => {
  return (
    <View>
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
    backgroundColor: '#FEF3F4',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  jpHira: {
    color: COLORS.gray2,
  },
  jpText: {
    color: '#0090B2',
  },
});
