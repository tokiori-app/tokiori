import { Pressable } from 'react-native';
import CloseSVG from '@assets/icons/close.svg';
import LeftArrow from '@assets/icons/left-arrow.svg';
import { useRouter } from 'expo-router';

interface PrevBtnProps {
  icon?: 'close' | 'back';
  onClick?: () => void;
}

/**
 * 뒤로 가기 버튼 | X 버튼
 * @param {('close' | 'back')} icon // 표시할 아이콘 타입
 * @param {Function} onClick // 클릭 핸들러 (미지정시 router.back 동작)
 */
const PrevBtn = ({ icon = 'back', onClick }: PrevBtnProps) => {
  const router = useRouter();

  const handlePress = () => {
    if (onClick) {
      onClick();
      return;
    }

    router.back();
  };

  return (
    <Pressable onPress={handlePress}>
      {icon === 'close' ? <CloseSVG width={24} /> : <LeftArrow width={24} />}
    </Pressable>
  );
};

export default PrevBtn;
