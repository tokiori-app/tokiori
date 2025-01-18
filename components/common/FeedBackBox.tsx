import { StyleSheet, Text, View } from 'react-native';
import COLORS from '@constant/color';

interface FeedBackBoxProps {
  feedbackType: 'success' | 'fail' | 'empty';
}

const FeedBackBox = ({ feedbackType }: FeedBackBoxProps) => {
  const isEmpty = feedbackType === 'empty';
  const isFail = feedbackType === 'empty';
  const isSuccess = feedbackType === 'empty';

  if (isEmpty || isFail) {
    return (
      <View style={[s.feedbackContainer, s.feebackFail]}>
        <Text style={s.feebackFailText}>
          {isEmpty ? '아무것도 클릭하지 않았습니다' : '앗 아쉽지만 오답입니다!'}
        </Text>
      </View>
    );
  }

  if (isSuccess) {
    return (
      <View style={[s.feedbackContainer, s.feedbackSucess]}>
        <Text style={s.feedbackSucessText}>잘했어요! 정답입니다.</Text>
      </View>
    );
  }

  return null;
};

export default FeedBackBox;

const s = StyleSheet.create({
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
