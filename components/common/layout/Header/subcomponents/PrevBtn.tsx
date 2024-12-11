import { Pressable } from 'react-native';
import CloseSVG from '@assets/icons/close.svg';
import LeftArrow from '@assets/icons/left-arrow.svg';
import { useRouter } from 'expo-router';

interface PrevBtnProps {
  isClose?: boolean;
}

/**
 * 뒤로 가기 버튼 | X 버튼
 * @param {boolean | undefined} isClose // < 모양을 x로 바꿉니다.
 */
const PrevBtn = ({ isClose }: PrevBtnProps) => {
  const router = useRouter();
  return (
    <Pressable onPress={router.back}>
      {isClose ? <CloseSVG width={24} /> : <LeftArrow width={24} />}
    </Pressable>
  );
};

export default PrevBtn;
