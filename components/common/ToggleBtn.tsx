import { Pressable, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import useToggleAnimation from 'hooks/useToggleAnimation';

interface ToggleBtnProps {
  active: boolean;
  onClick: () => void;
}

const ToggleBtn = ({ active, onClick }: ToggleBtnProps) => {
  const animationStyle = useToggleAnimation(active);

  return (
    <Pressable onPress={onClick}>
      <Animated.View style={[s.container, animationStyle.backgroundStyle]}>
        <Animated.View style={[s.circle, animationStyle.leftStyle]} />
      </Animated.View>
    </Pressable>
  );
};

export default ToggleBtn;

const s = StyleSheet.create({
  container: {
    width: 36,
    height: 20,
    borderRadius: 1000,
    justifyContent: 'center',
  },
  circle: {
    width: 16,
    height: 16,
    backgroundColor: '#fff',
    borderRadius: 1000,
  },
});
