import { StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import useQuitModal from '@hooks/modal/useQuitModal';
import useRandomWord from '@hooks/page/word/useRandomWord';
import React, { useEffect, useState } from 'react';
import readerHandler from 'service/Reader';
import Loading from '@components/common/Loading';
import EndGameScreen from '@components/page/(word)/EndGame/EndGameScreen';
import GameView from '@components/page/(word)/GameView';

const GameWordScreen = () => {
  const [clickAnswer, setClickAnswer] = useState<string>('');
  const [feedbackType, setFeedbackType] = useState<
    'success' | 'fail' | 'empty'
  >();
  const { isPending, quiz, pager } = useRandomWord();
  const { openModalHanlder, QuitModal } = useQuitModal();

  const wordClickHandler = (word: string) => {
    readerHandler.playSound(word);
    setClickAnswer(word);
  };

  const confirmHandler = () => {
    if (clickAnswer === '') {
      setFeedbackType('empty');
    }

    if (clickAnswer === quiz.answer?.word) {
      setFeedbackType('success');
    }

    if (clickAnswer !== quiz.answer?.word) {
      setFeedbackType('fail');
      quiz.saveWrongHandler();
    }
  };

  // 초기화
  useEffect(() => {
    setClickAnswer('');
    setFeedbackType(undefined);
  }, [quiz.answer]);

  if (isPending) return <Loading />;

  return (
    <>
      <PagerView
        ref={pager.pagerRef}
        style={s.container}
        initialPage={0}
        scrollEnabled={false}
      >
        <GameView
          key={0}
          openModalHanlder={openModalHanlder}
          wordClickHandler={wordClickHandler}
          pager={pager}
          quiz={quiz}
          feedbackType={feedbackType}
          confirmHandler={confirmHandler}
          clickAnswer={clickAnswer}
        />
        <EndGameScreen
          key={1}
          wrongWords={quiz.wrongWords}
          openModalHanlder={openModalHanlder}
        />
      </PagerView>
      <QuitModal />
    </>
  );
};

export default GameWordScreen;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
