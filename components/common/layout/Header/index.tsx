import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React, { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> & {
  Left: React.FC<HeaderProps>;
  Center: React.FC<HeaderProps>;
  Right: React.FC<HeaderProps>;
} = ({ children }) => {
  return (
    <SafeAreaView>
      <View style={s.container}>{children}</View>
    </SafeAreaView>
  );
};

Header.Left = ({ children }: HeaderProps) => (
  <View style={s.left}>{children}</View>
);
Header.Center = ({ children }: HeaderProps) => <View>{children}</View>;
Header.Right = ({ children }: HeaderProps) => (
  <View style={s.right}>{children}</View>
);

Header.Right.displayName = 'Header.Right';
Header.Left.displayName = 'Header.Left';
Header.Center.displayName = 'Header.Center';

export default Header;

const s = StyleSheet.create({
  container: {
    /* Android 상단 StatusBar 뚫고 올라가있는 이슈로 인한 currentHeight 추가 */
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
