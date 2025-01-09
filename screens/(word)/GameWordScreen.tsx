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
import { useRouter } from 'expo-router';
import { supabase } from 'lib/supabase';
import { Suspense, useEffect, useState } from 'react';
import readerHandler from 'service/Reader';
import Loading from '@components/common/Loading';
import Header from '@components/common/layout/Header';

const GameWordScreen = () => {
  const router = useRouter();
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

  return (
    <View style={[s.inset]}>
      <Header>
        <Header.Left>
          <Pressable onPress={() => router.back()}>
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
                  style={s.soundButton}
                  onPress={() => readerHandler.playSound(sound)}
                >
                  <SoundSVG />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity style={s.confirmButton} onPress={() => {}}>
            <Text style={s.confirmText}>확인</Text>
          </TouchableOpacity>
        </Suspense>
      </View>
    </View>
  );
};

export default GameWordScreen;

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
  confirmButton: {
    marginBottom: 56,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gray3,
    borderRadius: 10,
  },
  confirmText: {
    color: COLORS.gray2,
  },
});
