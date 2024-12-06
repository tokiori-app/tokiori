import COLORS from 'constant/color';
import { Stack } from 'expo-router';
import SettingHeader from '@components/page/setting/SettingHeader';

const SettingLayout = () => {
  return (
    <Stack
      screenOptions={{
        header: (props) => <SettingHeader props={props} />,
        contentStyle: { backgroundColor: COLORS.white },
      }}
    >
      <Stack.Screen name="setting/index" options={{ title: '설정' }} />
    </Stack>
  );
};

export default SettingLayout;
