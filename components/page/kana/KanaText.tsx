import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import COLORS from '@constant/color';
import t from '@constant/typography';
import { useRef } from 'react';

interface KanaTextProps {
  isRubyVisible: boolean;
  kana: {
    char: string;
    ko: string;
    en: string;
  };
}

const KanaText = ({ isRubyVisible, kana }: KanaTextProps) => {
  const { char, ko, en } = kana;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const pressStartTime = useRef(0);
  const pressAnimation = useRef<Animated.CompositeAnimation>();

  const handlePressIn = () => {
    pressStartTime.current = Date.now();

    pressAnimation.current = Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.delay(200),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]);
    pressAnimation.current.start();
  };

  const handlePressOut = () => {
    const pressDuration = Date.now() - pressStartTime.current;

    if (pressDuration < 500) {
      if (pressAnimation.current) {
        pressAnimation.current.stop();
      }

      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.delay(200),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    }
  };

  const animatedStyle = {
    backgroundColor: fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [COLORS.white, COLORS.main],
    }),
    transform: [
      {
        scale: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1],
        }),
      },
    ],
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={({ pressed }) => [s.pressable, pressed && s.pressed]}
    >
      <Animated.View style={[s.container, animatedStyle]}>
        <Text style={[t.jp24]}>{char}</Text>

        {isRubyVisible && (
          <View>
            <Text style={[t.subtitle]}>
              {ko} {en}
            </Text>
          </View>
        )}
      </Animated.View>
    </Pressable>
  );
};

const s = StyleSheet.create({
  container: {
    width: 56,
    height: 72,
    backgroundColor: COLORS.white,
    borderRadius: 120,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ scaleY: 0.5 }],
  },

  pressed: {
    backgroundColor: COLORS.main,
  },
  active: {
    backgroundColor: COLORS.main,
  },
  pressable: {
    width: 56,
    height: 72,
    borderRadius: 50,
  },
});

export default KanaText;
