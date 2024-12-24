import { Pressable } from 'react-native';
import SettingSVG from '@assets/icons/setting.svg';
import COLORS from '@constant/color';
import ROUTES from '@constant/routes';
import { useRouter } from 'expo-router';

const SettingBtn = () => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push(ROUTES.SETTING)}>
      <SettingSVG color={COLORS.black} />
    </Pressable>
  );
};

export default SettingBtn;
