import { Text, View } from 'react-native';
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
          header: (props) => (
            <Header props={props}>
              <View>
                <Text>112</Text>
              </View>
            </Header>
          ),
          title: '123',
        }}
      />
    </Stack>
  );
};

export default SettingLayout;
