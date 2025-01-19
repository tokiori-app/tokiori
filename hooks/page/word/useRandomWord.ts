import PagerView from 'react-native-pager-view';
import { Database } from '$types/database';
import { supabase } from 'lib/supabase';
import { useEffect, useRef, useState } from 'react';

type WordType = Database['public']['Tables']['words']['Row'];

const useRandomWord = () => {
  const pagerRef = useRef<PagerView>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [prevAnswer, setPrevAnswer] = useState<string[]>([]);
  const [answer, setAnswer] = useState<WordType>();
  const [wrongWords, setWrongWords] = useState<WordType[]>([]);
  const [choices, setChoices] = useState<WordType[]>([]);

  const randomWord = async () => {
    try {
      setIsPending(true);
      const { data } = await supabase
        .rpc('get_random_words', {
          excluded_words: prevAnswer,
        })
        .single();
      if (data) {
        const shuffledData = [...data.choices];

        // 가져온 데이터를 셔플 (Fisher-Yates 알고리즘)
        for (let i = shuffledData.length - 1; i > 0; i--) {
          // 배열의 끝부터 시작
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledData[i], shuffledData[j]] = [
            shuffledData[j],
            shuffledData[i],
          ]; // 배열을 무작위로 셔플
        }

        const { data: answer } = await supabase
          .from('words') // 테이블 이름
          .select('*') // 필요한 컬럼 지정
          .eq('id', data.answer_id)
          .single();

        const { data: choices } = await supabase
          .from('words') // 테이블 이름
          .select('*') // 필요한 컬럼 지정
          .in('id', shuffledData);

        if (answer) {
          setAnswer(answer);
          setPrevAnswer((prev) => [...prev, answer.word]);
        }
        if (choices) setChoices(choices);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsPending(false);
    }
  };

  const saveWrongHandler = () => {
    if (answer) {
      setWrongWords((prev) => [...prev, answer]);
    }
  };

  const nextQuizHandler = () => {
    randomWord();
    setCurrentPage((prev) => prev + 1);
    requestAnimationFrame(() => pagerRef.current?.setPage(currentPage));
  };

  useEffect(() => {
    randomWord();
  }, []);

  return {
    isPending,
    quiz: { answer, choices, nextQuizHandler, saveWrongHandler },
    pager: { pagerRef, currentPage, setCurrentPage },
  };
};
export default useRandomWord;
