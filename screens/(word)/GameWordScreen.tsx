import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CloseSVG from '@assets/icons/close.svg';
import SoundSVG from '@assets/icons/sound.svg';
import COLORS from '@constant/color';
import t from '@constant/typography';
import useRandomWord from '@hooks/page/word/useRandomWord';
import { useRouter } from 'expo-router';
import { Suspense, useState } from 'react';
import readerHandler from 'service/Reader';
import Loading from '@components/common/Loading';
import Header from '@components/common/layout/Header';

const GameWordScreen = () => {
  const router = useRouter();
  const { answer, sounds } = useRandomWord();
  const [clickAnswer, setClickAnswer] = useState<string>('');
  const [feedbackType, setFeedbackType] = useState<
    'empty' | 'success' | 'fail' | undefined
  >();

  const wordClickHandler = (word: string) => {
    readerHandler.playSound(word);
    setClickAnswer(word);
  };

  const quitMinigameHandler = () => {
    router.back();
  };

  const confirmHandler = () => {
    if (clickAnswer === '') {
      return setFeedbackType('empty');
    }
    if (clickAnswer === answer) {
      return setFeedbackType('success');
    }
    if (clickAnswer !== answer) {
      return setFeedbackType('fail');
    }
  };

  return (
    <View style={[s.inset]}>
      <Header>
        <Header.Left>
          <Pressable onPress={quitMinigameHandler}>
            <CloseSVG />
          </Pressable>
        </Header.Left>
        <Header.Right>
          <Text style={t.title3}>1/10</Text>
        </Header.Right>
      </Header>

      <View style={[s.container, s.inset]}>
        <Suspense fallback={<Loading />}>
          <View style={s.gridContainer}>
            <Text style={t.jp60}>{answer}</Text>
            <View style={s.grid}>
              {sounds.map((sound) => (
                <TouchableOpacity
                  key={sound}
                  style={[
                    s.soundButton,
                    clickAnswer === sound && s.activeSoundButton,
                  ]}
                  onPress={() => wordClickHandler(sound)}
                >
                  <SoundSVG />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={s.confirmBox}>
            <FeedBackBox feedbackType={feedbackType} />
            <TouchableOpacity
              style={[
                s.confirmButton,
                feedbackType !== 'empty' ? s.confirmNext : s.confirmBase,
              ]}
              onPress={confirmHandler}
            >
              <Text
                style={
                  feedbackType !== 'empty' ? s.confirmNextText : s.confirmText
                }
              >
                {feedbackType !== 'empty' ? '다음' : '확인'}
              </Text>
            </TouchableOpacity>
          </View>
        </Suspense>
      </View>
    </View>
  );
};

export default GameWordScreen;

interface FeedBackBoxProps {
  feedbackType?: 'empty' | 'success' | 'fail';
}

const FeedBackBox = ({ feedbackType }: FeedBackBoxProps) => {
  if (feedbackType === 'empty' || feedbackType === 'fail') {
    return (
      <View style={[s.feedbackContainer, s.feebackFail]}>
        <Text style={s.feebackFailText}>
          {feedbackType === 'empty'
            ? '아무것도 클릭하지 않았습니다'
            : '앗 아쉽지만 오답입니다!'}
        </Text>
      </View>
    );
  }

  if (feedbackType === 'success') {
    return (
      <View style={[s.feedbackContainer, s.feedbackSucess]}>
        <Text style={s.feedbackSucessText}>잘했어요! 정답입니다.</Text>
      </View>
    );
  }

  return null;
};

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
  feedbackContainer: {
    borderWidth: 1,
    borderRadius: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feebackFail: {
    borderColor: COLORS.incorrect,
    backgroundColor: 'rgba(231,76,60,0.2)',
  },
  feedbackSucess: {
    borderColor: '#2ECC71',
    backgroundColor: '#DEFAEA',
  },
  feebackFailText: {
    color: COLORS.incorrect,
  },
  feedbackSucessText: {
    color: '#1B7A43',
  },
});
