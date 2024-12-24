import COLORS from 'constant/color';
import { Stack } from 'expo-router';

const KanaLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: COLORS.white },
        headerShown: false,
        animation: 'fade', // 임시...?
      }}
    >
      <Stack.Screen name="kana/hiragana/index" />
      <Stack.Screen name="kana/katakana/index" />
    </Stack>
  );
};

export default KanaLayout;
