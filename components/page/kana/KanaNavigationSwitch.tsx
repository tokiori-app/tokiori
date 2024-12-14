import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLORS from '@constant/color';
import ROUTES from '@constant/routes';
import t from '@constant/typography';
import { usePathname, useRouter } from 'expo-router';

const KanaNavigationSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isHiragana = pathname.includes(ROUTES.KANA.HIRAGANA);
  const isKatakana = pathname.includes(ROUTES.KANA.KATAKANA);

  const handleHiragana = () => {
    if (isHiragana) return;
    router.replace(ROUTES.KANA.HIRAGANA);
  };

  const handleKatakana = () => {
    if (isKatakana) return;
    router.replace(ROUTES.KANA.KATAKANA);
  };

  return (
    <View style={[s.tabContainer]}>
      <TouchableOpacity
        style={[s.tabButton, isHiragana && s.activeTab]}
        onPress={handleHiragana}
        activeOpacity={1}
      >
        <Text style={[s.tabText, t.heading2]}>히라가나</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[s.tabButton, isKatakana && s.activeTab]}
        onPress={handleKatakana}
        activeOpacity={1}
      >
        <Text style={[s.tabText, t.heading2]}>가타카나</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KanaNavigationSwitch;

const s = StyleSheet.create({
  tabContainer: {
    width: 'auto',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 44,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
    height: 32,
  },
  activeTab: {
    backgroundColor: COLORS.main,
  },
  tabText: {
    color: COLORS.black,
  },
});
