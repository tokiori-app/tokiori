import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LeftArrow from '@assets/icons/left-arrow.svg';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

const SettingHeader = ({ props }: { props: NativeStackHeaderProps }) => {
  return (
    <SafeAreaView>
      <View style={s.container}>
        <Pressable onPress={props.navigation.goBack} style={s.button}>
          <LeftArrow width={24} />
        </Pressable>
        <Text style={s.text}>{props.options.title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingHeader;

const s = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  button: {
    position: 'absolute',
    left: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: -0.5,
  },
});
