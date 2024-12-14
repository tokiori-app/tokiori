import COLORS from '@constant/color';
import { Stack } from 'expo-router';

const SettingLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: COLORS.white },
        headerShown: false,
      }}
    >
      <Stack.Screen name="setting/index" />
    </Stack>
  );
};

export default SettingLayout;
