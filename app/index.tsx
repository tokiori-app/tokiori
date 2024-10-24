import { Text, View } from 'react-native';
import { Link } from 'expo-router';

const IndexPage = () => (
  <View>
    <Link href="/hiragana">
      <Text>히라가나 페이지</Text>
    </Link>
    <Link href="/word">
      <Text>단어장 페이지</Text>
    </Link>
    <Link href="/sound">
      <Text>사운드 퀴즈 페이지</Text>
    </Link>
    <Link href="/soundWrite">
      <Text>사운드 퀴즈 페이지(텍스트)</Text>
    </Link>
  </View>
);

export default IndexPage;
