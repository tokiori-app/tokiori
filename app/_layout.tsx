import { WordProvider } from '@provider/WordProvider';
import COLORS from 'constant/color';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

const Layout = () => {
  const [loaded] = useFonts({
    PretendardMedium: require('../assets/fonts/Pretendard-Medium.otf'),
    PretendardSemiBold: require('../assets/fonts/Pretendard-SemiBold.otf'),
    PretendardJPMedium: require('../assets/fonts/PretendardJP-Medium.otf'),
    PretendardJPSemiBold: require('../assets/fonts/PretendardJP-SemiBold.otf'),
    PretendardJPBold: require('../assets/fonts/PretendardJP-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <WordProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: COLORS.white },
        }}
      />
    </WordProvider>
  );
};

export default Layout;
