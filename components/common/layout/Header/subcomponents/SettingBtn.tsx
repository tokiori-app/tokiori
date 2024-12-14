import { Pressable } from 'react-native';
import SettingSVG from '@assets/icons/setting.svg';
import ROUTES from '@constant/routes';
import { useRouter } from 'expo-router';

/**
 * 환경설정 버튼
 */
const SettingBtn = () => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push(ROUTES.SETTING)}>
      <SettingSVG />
    </Pressable>
  );
};

export default SettingBtn;
