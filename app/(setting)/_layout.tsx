import { Stack } from 'expo-router';

const SettingLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Stack.Screen name="setting/index" options={{ title: '설정' }} />
    </Stack>
  );
};

export default SettingLayout;
