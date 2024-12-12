import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const IndexPage = () => (
  <SafeAreaView>
    <Link href="/hiragana">
      <Text>히라가나 페이지</Text>
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
    <Link href="/setting">
      <Text>공지사항</Text>
    </Link>
  </SafeAreaView>
);

export default IndexPage;
