import { Text } from 'react-native';
import t from 'styles/typography';

/**
 * 기본 타이틀 컴포넌트
 * @param {string} label 안에 들어갈 텍스트 내용을 입력합니다.
 */
const HeaderTitle = ({ label }: { label: string }) => {
  return <Text style={t.heading1}>{label}</Text>;
};

export default HeaderTitle;
