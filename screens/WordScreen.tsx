import { ScrollView, Text, View } from 'react-native';
import readerHandler from 'service/Reader';
import styled from 'styled-components/native';
import RubyText from '@components/RubyText';

const WordScreen = () => {
  return (
    <ScrollView>
      <View
        style={{
          gap: 20,
        }}
      >
        <PressableStyle onPress={() => readerHandler.playSound('新しい')}>
          <RubyText color="#fff" ruby="(あたら)" base="新" />
          <Text
            style={{
              fontSize: 16,
              color: '#fff',
            }}
          >
            しい
          </Text>
        </PressableStyle>
        <PressableStyle onPress={() => readerHandler.playSound('スマホ')}>
          <Text
            style={{
              fontSize: 16,
              color: '#fff',
            }}
          >
            スマホ
          </Text>
        </PressableStyle>
      </View>
    </ScrollView>
  );
};

export default WordScreen;

const PressableStyle = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #000;
`;
