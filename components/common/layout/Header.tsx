import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CloseSVG from '@assets/icons/close.svg';
import LeftArrow from '@assets/icons/left-arrow.svg';
import SettingSVG from '@assets/icons/setting.svg';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useRouter } from 'expo-router';
import { ReactNode } from 'react';
import t from 'styles/typography';

interface HeaderProps {
  children?: ReactNode;
  props: NativeStackHeaderProps;
  isSetting?: boolean;
  isHide?: boolean;
  isClose?: () => void;
}

/**
 * Header 컴포넌트
 *
 * @param {ReactNode} [children] 컴포넌트를 작성할때 children을 작성합니다. (작성하지 않으면 title값이 들어갑니다.)
 * @param {NativeStackHeaderProps} props 기본 Stack의 props를 전달합니다.
 * @param {boolean} [isSetting] 설정 버튼을 추가 합니다.
 * @param {boolean} [isHide] 뒤로가기 버튼을 없앱니다.
 * @param {Function} [isClose] X버튼에 들어갈 함수를 입력하면 뒤로가기 버튼을 없애고 X버튼을 넣습니다.
 */
const Header = ({
  props,
  isSetting,
  isHide,
  isClose,
  children,
}: HeaderProps) => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={s.container}>
        {isClose ? (
          <Pressable onPress={isClose} style={s.left}>
            <CloseSVG width={24} />
          </Pressable>
        ) : (
          !isHide && (
            <Pressable onPress={props.navigation.goBack} style={s.left}>
              <LeftArrow width={24} />
            </Pressable>
          )
        )}
        {children ? (
          children
        ) : (
          <Text style={t.heading1}>{props.options.title}</Text>
        )}
        {isSetting && (
          <Pressable style={s.right} onPress={() => router.push('/setting')}>
            <SettingSVG />
          </Pressable>
        )}
        {props.options.headerRight && (
          <View style={s.right}>
            <props.options.headerRight canGoBack />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;

const s = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  left: {
    position: 'absolute',
    left: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  right: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
});
