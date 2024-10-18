import { Pressable, Text } from 'react-native';
import HIRAGANAS from 'constant/hiragana';
import readerHandler from 'service/Reader';
import styled from 'styled-components/native';
import RubyText from '@components/RubyText';

const HiraganaQuizScreen = () => {
  return (
    <>
      <GridContainer>
        {HIRAGANAS.map((hiraganas) =>
          hiraganas.map((hiragana) => (
            <StyledPressable
              key={hiragana}
              onPress={() => readerHandler.playSound(hiragana)}
            >
              <StyledText>{hiragana}</StyledText>
            </StyledPressable>
          )),
        )}
      </GridContainer>
      <Pressable
        onPress={() => readerHandler.playSound('新しい')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 100,
          backgroundColor: '#000',
          marginTop: 24,
        }}
      >
        <RubyText color="#fff" ruby="(あたら)" base="新" />
        <Text
          style={{
            fontSize: 16,
            color: '#fff',
          }}
        >
          しい
        </Text>
      </Pressable>
    </>
  );
};

export default HiraganaQuizScreen;

const GridContainer = styled.View`
  padding: 0px 5px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
`;

const StyledPressable = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: #acf;
`;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
