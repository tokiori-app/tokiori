import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import CloseSVG from '@assets/icons/close.svg';
import SoundSVG from '@assets/icons/sound.svg';
import COLORS from '@constant/color';
import t from '@constant/typography';
import FeedBackBox from '@components/common/FeedBackBox';
import Header from '@components/common/layout/Header';

const GameView = ({
  openModalHanlder,
  wordClickHandler,
  pager,
  quiz,
  feedbackType,
  confirmHandler,
  clickAnswer,
}: {
  openModalHanlder: () => void;
  wordClickHandler: (word: string) => void;
  pager: {
    pagerRef: React.RefObject<PagerView>;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  };
  quiz: {
    answer:
      | {
          created_at: string;
          hiragana: string;
          id: number;
          korean: string;
          word: string;
        }
      | undefined;
    choices: {
      created_at: string;
      hiragana: string;
      id: number;
      korean: string;
      word: string;
    }[];
    nextQuizHandler: () => number | undefined;
    saveWrongHandler: () => void;
  };
  feedbackType?: 'success' | 'fail' | 'empty';
  confirmHandler: () => void;
  clickAnswer: string;
}) => {
  return (
    <View style={s.inset}>
      <Header>
        <Header.Left>
          <Pressable onPress={openModalHanlder}>
            <CloseSVG />
          </Pressable>
        </Header.Left>
        <Header.Right>
          <Text style={t.title3}>{pager.currentPage}/10</Text>
        </Header.Right>
      </Header>
      <View style={[s.container, s.inset]}>
        <View style={s.gridContainer}>
          <Text style={t.jp60}>{quiz.answer?.word}</Text>
          <View style={s.grid}>
            {quiz.choices.map((choice) => {
              const isCorrect = choice.word === quiz.answer?.word;
              const isClicked = choice.word === clickAnswer;
              const isChecked =
                feedbackType === 'success' || feedbackType === 'fail';
              return (
                <TouchableOpacity
                  key={choice.word}
                  style={[
                    s.soundButton,
                    clickAnswer === choice.word && s.activeSoundButton,
                    isChecked && isClicked && !isCorrect && s.failSoundButton,
                    isChecked && isCorrect && s.answerSoundButton,
                    isChecked &&
                      !isClicked &&
                      !isCorrect &&
                      s.activeSoundButton,
                  ]}
                  onPress={() => wordClickHandler(choice.word)}
                  disabled={isChecked}
                >
                  <SoundSVG />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={s.confirmBox}>
          {feedbackType && <FeedBackBox feedbackType={feedbackType} />}
          <TouchableOpacity
            style={[
              s.confirmButton,
              feedbackType && feedbackType !== 'empty'
                ? s.confirmNext
                : s.confirmBase,
            ]}
            onPress={() =>
              feedbackType && feedbackType !== 'empty'
                ? quiz.nextQuizHandler()
                : confirmHandler()
            }
          >
            <Text
              style={
                feedbackType && feedbackType !== 'empty'
                  ? s.confirmNextText
                  : s.confirmText
              }
            >
              {feedbackType && feedbackType !== 'empty' ? '다음' : '확인'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GameView;

const s = StyleSheet.create({
  inset: {
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  gridContainer: {
    alignItems: 'center',
    marginTop: 37,
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 36,
    gap: 15,
  },
  soundButton: {
    backgroundColor: COLORS.secondary,
    width: 164,
    height: 164,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  activeSoundButton: {
    borderWidth: 1,
    borderColor: COLORS.main,
  },
  failSoundButton: {
    backgroundColor: 'rgba(231,76,60,0.4)',
    borderWidth: 1,
    borderColor: COLORS.main,
  },
  answerSoundButton: {
    backgroundColor: 'rgba(46,204,113,0.4)',
    borderWidth: 1,
    borderColor: COLORS.main,
  },
  confirmBox: {
    gap: 20,
  },
  confirmButton: {
    marginBottom: 56,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  confirmBase: {
    backgroundColor: COLORS.gray3,
  },
  confirmNext: {
    backgroundColor: COLORS.main,
  },
  confirmText: {
    color: COLORS.gray2,
  },
  confirmNextText: {
    color: COLORS.black,
  },
});
