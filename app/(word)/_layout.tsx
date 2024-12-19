import COLORS from '@constant/color';
import { Stack } from 'expo-router';

const SettingLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: COLORS.white },
        headerShown: false,
      }}
    />
  );
};

export default SettingLayout;
