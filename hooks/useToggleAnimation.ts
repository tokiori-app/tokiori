import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import COLORS from 'constant/color';
import { useEffect } from 'react';

const BACKGROUNDBASE = '#D9D9D9';

const useToggleAnimation = (active: boolean) => {
  const maxWidth = 36 - 16 - 2;

  const backgroundColor = useSharedValue<string>(BACKGROUNDBASE);
  const leftSpring = useSharedValue<number>(2);

  const backgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));
  const leftStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: leftSpring.value }],
  }));

  useEffect(() => {
    backgroundColor.value = withTiming(active ? COLORS.main : BACKGROUNDBASE, {
      duration: 300,
    });
    leftSpring.value = withSpring(active ? maxWidth : 2, { duration: 500 });
  }, [active]);

  return {
    backgroundStyle,
    leftStyle,
  };
};

export default useToggleAnimation;
