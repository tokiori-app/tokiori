import { Pressable, StyleSheet } from 'react-native';
import EyesDisabled from '@assets/icons/eyes-disabled.svg';
import Eyes from '@assets/icons/eyes.svg';

interface EyesBtnProps {
  isActive: boolean;
  onClick: () => void;
}

const EyesBtn = ({ isActive, onClick }: EyesBtnProps) => {
  return (
    <Pressable onPress={onClick} style={s.box}>
      {isActive ? <EyesDisabled /> : <Eyes />}
    </Pressable>
  );
};

export default EyesBtn;

const s = StyleSheet.create({
  box: {
    position: 'absolute',
    left: 16,
    top: 16,
    width: 25,
    height: 20,
  },
});
