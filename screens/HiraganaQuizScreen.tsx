import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import styled from 'styled-components/native';

const HiraganaQuizScreen = () => {
  const [sound, setSound] = useState<Audio.Sound>();

  const playSound = async () => {
    try {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/voice/a-voice.mp3'),
      );
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
    } catch (error) {
      console.error('Error loading or playing sound:', error);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <GridContainer>
      <StyledPressable onPress={playSound}>
        <StyledText>あ</StyledText>
      </StyledPressable>
      <StyledPressable>
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
