import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ROUTES from '@constant/routes';
import { Link } from 'expo-router';

const IndexPage = () => (
  <SafeAreaView>
    <Link href={ROUTES.KANA.HIRAGANA}>
      <Text>히라가나/가타카나</Text>
    </Link>
    <Link href="/hiragana">
      <Text>히라가나</Text>
    </Link>
    <Link href="/word">
      <Text>단어장 페이지</Text>
    </Link>
    <Link href="/sound">
      <Text>사운드 퀴즈 페이지</Text>
    </Link>
    <Link href="/soundWord">
      <Text>사운드 문자 퀴즈 페이지</Text>
    </Link>
    <Link href="/soundWrite">
      <Text>사운드 퀴즈 페이지(텍스트)</Text>
    </Link>
    <Link href={ROUTES.SETTING}>
      <Text>공지사항</Text>
    </Link>
  </SafeAreaView>
);

export default IndexPage;
