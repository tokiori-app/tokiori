import COLORS from 'constant/color';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

const Layout = () => {
  const [loaded] = useFonts({
    Pretendard: require('../assets/fonts/Pretendard-Medium.otf'),
    PretendardJP: require('../assets/fonts/PretendardJP-Medium.otf'),
    PretendardBold: require('../assets/fonts/Pretendard-SemiBold.otf'),
    PretendardJPBold: require('../assets/fonts/PretendardJP-SemiBold.otf'),
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
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: COLORS.white },
      }}
    />
  );
};

export default Layout;
