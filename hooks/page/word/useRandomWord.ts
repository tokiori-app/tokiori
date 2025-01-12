import { supabase } from 'lib/supabase';
import { useEffect, useState } from 'react';

const useRandomWord = () => {
  const [answer, setAnswer] = useState<string | null>(null);
  const [sounds, setSounds] = useState<string[]>([]);

  useEffect(() => {
    const randomWord = async () => {
      const { data } = await supabase.rpc('get_random_words');
      if (data) {
        const shuffledData = [...data];

        // 가져온 데이터를 셔플 (Fisher-Yates 알고리즘)
        for (let i = shuffledData.length - 1; i > 0; i--) {
          // 배열의 끝부터 시작
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledData[i], shuffledData[j]] = [
            shuffledData[j],
            shuffledData[i],
          ]; // 배열을 무작위로 셔플
        }

        const randomIndex = Math.floor(Math.random() * shuffledData.length);
        setAnswer(shuffledData[randomIndex]);
        setSounds(shuffledData);
      }
    };
    randomWord();
  }, []);

  return { answer, sounds };
};
export default useRandomWord;
