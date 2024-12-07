import COLORS from 'constant/color';
import { Stack } from 'expo-router';
import Header from '@components/common/layout/Header';

const SettingLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: COLORS.white },
      }}
    >
      <Stack.Screen
        name="setting/index"
        options={{
          header: (props) => <Header props={props} />,
          title: '설정',
        }}
      />
    </Stack>
  );
};

export default SettingLayout;
