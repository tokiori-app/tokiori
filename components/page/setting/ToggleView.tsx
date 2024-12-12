import { StyleSheet, Text, View } from 'react-native';
import COLORS from 'constant/color';
import ToggleBtn from '@components/common/ToggleBtn';

interface ToggleViewProps {
  title: string;
  subTitle: string;
  active: boolean;
  onClick: () => void;
}

const ToggleView = ({ active, onClick, title, subTitle }: ToggleViewProps) => {
  return (
    <View style={s.container}>
      <View>
        <Text style={s.title}>{title}</Text>
        <Text style={s.subTitle}>{subTitle}</Text>
      </View>
      <ToggleBtn active={active} onClick={onClick} />
    </View>
  );
};

export default ToggleView;

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    letterSpacing: -0.4,
  },
  subTitle: {
    fontSize: 14,
    letterSpacing: -0.35,
    color: COLORS.gray2,
  },
});
