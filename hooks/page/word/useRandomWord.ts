import PagerView from 'react-native-pager-view';
import { supabase } from 'lib/supabase';
import { useEffect, useRef, useState } from 'react';

const useRandomWord = () => {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [prevAnswer, setPrevAnswer] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string | null>(null);
  const [choices, setChoices] = useState<string[]>([]);

  const randomWord = async () => {
    const { data } = await supabase.rpc('get_random_words', {
      excluded_words: prevAnswer,
    });
    if (data) {
      console.log(
        `prevAnswer : ${prevAnswer}, answer : ${data[0].answer}, choices : ${data[0].choices}`,
      );
      const shuffledData = [...data[0].choices];

      // 가져온 데이터를 셔플 (Fisher-Yates 알고리즘)
      for (let i = shuffledData.length - 1; i > 0; i--) {
        // 배열의 끝부터 시작
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]]; // 배열을 무작위로 셔플
      }

      setAnswer(data[0].answer);
      setChoices(shuffledData);
      setPrevAnswer((prev) => [...prev, data[0].answer]);
    }
  };

  useEffect(() => {
    randomWord();
  }, []);

  return {
    answer,
    choices,
    randomWord,
    pager: { pagerRef, currentPage, setCurrentPage },
  };
};
export default useRandomWord;