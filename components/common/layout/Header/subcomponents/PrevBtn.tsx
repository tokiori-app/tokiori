import { Pressable } from 'react-native';
import CloseSVG from '@assets/icons/close.svg';
import LeftArrow from '@assets/icons/left-arrow.svg';
import { useRouter } from 'expo-router';

interface PrevBtnProps {
  isClose?: boolean;
  onClick?: () => void;
}

/**
 * 뒤로 가기 버튼 | X 버튼
 * @param {boolean | undefined} isClose // < 모양을 x로 바꿉니다.
 * @param {Function} onClick // 기존 router를 무시하고 onClick 함수를 전달합니다.
 */
const PrevBtn = ({ isClose, onClick }: PrevBtnProps) => {
  const router = useRouter();
  return (
    <Pressable onPress={onClick ? onClick : router.back}>
      {isClose ? <CloseSVG width={24} /> : <LeftArrow width={24} />}
    </Pressable>
  );
};

export default PrevBtn;
