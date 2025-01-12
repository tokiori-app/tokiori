import { SafeAreaView, StyleSheet, View } from 'react-native';
import IndexText from '@assets/image/index_text.svg';
import Mascot from '@assets/image/mascot.svg';
import COLORS from '@constant/color';
import ROUTES from '@constant/routes';
import Header from '@components/common/layout/Header';
import SettingBtn from '@components/common/layout/Header/subcomponents/SettingBtn';
import Button from '@components/page/index/button';

const IndexScreen = () => {
  return (
    <SafeAreaView style={s.container}>
      <Header>
        <Header.Right>
          <SettingBtn />
        </Header.Right>
      </Header>
      <View style={s.mainContainer}>
        <View style={s.indexText}>
          <IndexText />
        </View>
        <Mascot width={104} height={193} />
        <View style={s.btnList}>
          <Button href={ROUTES.KANA.HIRAGANA} label="히라가나/가타카나" />
          <Button href={ROUTES.WORD.INDEX} label="일상단어" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IndexScreen;

const s = StyleSheet.create({
  container: {
    backgroundColor: COLORS.indexBackground,
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  indexText: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 32,
  },
  btnList: {
    flexDirection: 'column',
    gap: 32,
    marginTop: 60,
  },
});
