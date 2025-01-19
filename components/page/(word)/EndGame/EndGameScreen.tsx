import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Database } from '$types/database';
import CloseSVG from '@assets/icons/close.svg';
import HappyCharacter from '@assets/image/character/happy.svg';
import COLORS from '@constant/color';
import t from '@constant/typography';
import { useState } from 'react';
import Header from '@components/common/layout/Header';
import EndButton from './EndButton';
import EndCard from './EndCard';

type WordType = Database['public']['Tables']['words']['Row'];

interface EndGameScreenProps {
  wrongWords: WordType[];
  openModalHanlder: () => void;
}

const EndGameScreen = ({
  wrongWords,
  openModalHanlder,
}: EndGameScreenProps) => {
  const [selectWrong, setSelectWrong] = useState<WordType[]>([]);

  const allSelectHandler = () => {
    if (selectWrong.length > 0) {
      return setSelectWrong([]);
    }
    setSelectWrong(wrongWords);
  };

  const selectHandler = (wrongWord: WordType) => {
    setSelectWrong((prev) => {
      const isExisting = prev.some((item) => item.id === wrongWord.id);
      if (isExisting) {
        return prev.filter((item) => item.id !== wrongWord.id);
      } else {
        return [...prev, wrongWord];
      }
    });
  };

  return (
    <View style={s.inset}>
      <View style={s.headerBox}>
        <Header>
          <Header.Left>
            <Pressable onPress={openModalHanlder}>
              <CloseSVG />
            </Pressable>
          </Header.Left>
          <Header.Center>
            <Text style={t.heading1}>미니게임 완료</Text>
          </Header.Center>
        </Header>
        <View style={s.headerRow}>
          <Text style={t.title2}>
            미니게임을 완료했어요! {'\n'}아래에 틀린 단어들을 확인하고
            저장해보세요.
          </Text>
          <HappyCharacter style={s.headerCharacter} width={52} height={106} />
        </View>
      </View>
      <View style={s.inset}>
        <View style={s.allSelectBox}>
          <TouchableOpacity onPress={allSelectHandler} style={s.allSelect}>
            <Text style={t.heading2}>전체 선택</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={s.scrollContainer}
          contentContainerStyle={s.scrollContent}
        >
          {wrongWords.map((wrongWord) => (
            <EndCard
              onPress={() => selectHandler(wrongWord)}
              isActive={selectWrong.some((item) => item.id === wrongWord.id)}
            >
              <EndCard.Word
                hiragana={wrongWord.hiragana}
                word={wrongWord.word}
              />
              <EndCard.Kor korean={wrongWord.korean} />
            </EndCard>
          ))}
        </ScrollView>
      </View>
      <View style={s.btnList}>
        <EndButton
          onPress={openModalHanlder}
          style={{ width: 96, backgroundColor: COLORS.secondary }}
        >
          종료
        </EndButton>
        <EndButton style={{ flex: 1 }}>
          선택한 단어 저장 ({selectWrong.length})
        </EndButton>
      </View>
    </View>
  );
};

export default EndGameScreen;

const s = StyleSheet.create({
  inset: {
    flex: 1,
  },
  headerBox: {
    backgroundColor: COLORS.secondary,
  },
  headerRow: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerCharacter: {
    transform: [{ translateY: 10 }],
  },
  allSelectBox: {
    padding: 16,
    paddingBottom: 0,
  },
  allSelect: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.main,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    width: 83,
    height: 37,
  },
  scrollContainer: {
    marginTop: 24,
  },
  scrollContent: {
    gap: 16,
    paddingHorizontal: 16,
  },
  btnList: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 56,
    flexDirection: 'row',
    gap: 16,
  },
});
