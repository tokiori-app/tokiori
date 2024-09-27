import { Text } from 'react-native';
import styled from 'styled-components/native';
import RubyText from '../components/RubyText';

const index = () => {
  return (
    <Views>
      <RubyText ruby="ふりがな" base="漢字" />
      <Text>ふりがな</Text>
      <RubyText ruby="ふりがな" base="漢字" />
      <Text>ふりがな</Text>
    </Views>
  );
};

export default index;

const Views = styled.View`
  flex-direction: row;
  gap: 2.5px;
`;
