import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import RightArrow from '@assets/icons/right-arrow.svg';
import { useRouter } from 'expo-router';

/* 
  link or onClick 둘중 하나는 무조건 입력하게 타입지정
  둘다 입력했을경우 에러 반환
*/
type LinkViewProps =
  | {
      link: string;
      onClick?: never;
      label: string;
    }
  | {
      link?: never;
      onClick: () => void;
      label: string;
    };

const LinkView = ({ link, label, onClick }: LinkViewProps) => {
  const router = useRouter();

  const handlePress = () => {
    if (link) return router.push(link);
    if (onClick) return onClick();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={s.pressable}>
      <Text style={s.text}>{label}</Text>
      <RightArrow width={24} />
    </TouchableOpacity>
  );
};

export default LinkView;

const s = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    letterSpacing: -0.4,
  },
});
