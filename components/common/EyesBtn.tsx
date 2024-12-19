import { Pressable, StyleSheet } from 'react-native';
import EyesDisabled from '@assets/icons/eyes-disabled.svg';
import Eyes from '@assets/icons/eyes.svg';
import { useState } from 'react';

interface EyesBtnProps {
  isActive: boolean;
}

const EyesBtn = ({ isActive }: EyesBtnProps) => {
  const [active, setActive] = useState(isActive);

  const clickHandler = () => {
    setActive(!active);
  };

  return (
    <Pressable onPress={clickHandler} style={s.box}>
      {active ? <EyesDisabled /> : <Eyes />}
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
