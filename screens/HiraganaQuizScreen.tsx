import styled from 'styled-components/native';
import hiraganaHandler from '../service/Hiragana';

const HiraganaQuizScreen = () => {
  return (
    <GridContainer>
      <StyledPressable
        onPress={() => {
          hiraganaHandler.playSound('あ');
        }}
      >
        <StyledText>あ</StyledText>
      </StyledPressable>

      <StyledPressable
        onPress={() => {
          hiraganaHandler.playSound('い');
        }}
      >
        <StyledText>い</StyledText>
      </StyledPressable>

      <StyledPressable>
        <StyledText>う</StyledText>
      </StyledPressable>

      <StyledPressable>
        <StyledText>え</StyledText>
      </StyledPressable>

      <StyledPressable>
        <StyledText>お</StyledText>
      </StyledPressable>
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
const StyledPressable = styled.Pressable`
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
