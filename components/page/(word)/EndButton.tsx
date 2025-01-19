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

const EndButton = ({
  style,
  children,
}: {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}) => {
  return (
    <TouchableOpacity style={[s.container, style]}>
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
