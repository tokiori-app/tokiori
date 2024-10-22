import HIRAGANAS from 'constant/hiragana';
import readerHandler from 'service/Reader';
import styled from 'styled-components/native';

const HiraganaQuizScreen = () => {
  return (
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
