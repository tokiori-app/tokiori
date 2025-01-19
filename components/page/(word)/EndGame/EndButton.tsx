import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import COLORS from '@constant/color';
import t from '@constant/typography';
import { ReactNode } from 'react';

interface EndButtonProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  onPress?: () => void;
}

const EndButton = ({ style, children, onPress }: EndButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[s.container, style]}>
      <Text style={[t.title2, { color: COLORS.gray1 }]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default EndButton;

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.main,
    height: 44,
  },
});
