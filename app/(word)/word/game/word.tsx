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
import Loading from '@components/common/Loading';
import Header from '@components/common/layout/Header';

const GameWordPage = () => {
  const router = useRouter();
  const [answer, setAnswer] = useState<string | null>(null);

  useEffect(() => {
    const randomWord = async () => {
      const { data, error } = await supabase
        .from('random_word')
        .select('*')
        .limit(1)
        .single();

      if (error) {
        throw new Error(error.message);
      }
      setAnswer(data.word);
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
              <TouchableOpacity style={s.soundButton} onPress={() => {}}>
                <SoundSVG />
              </TouchableOpacity>
              <TouchableOpacity style={s.soundButton} onPress={() => {}}>
                <SoundSVG />
              </TouchableOpacity>
              <TouchableOpacity style={s.soundButton} onPress={() => {}}>
                <SoundSVG />
              </TouchableOpacity>
              <TouchableOpacity style={s.soundButton} onPress={() => {}}>
                <SoundSVG />
              </TouchableOpacity>
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

export default GameWordPage;

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
