import { Text, TouchableOpacity, Dimensions, Alert } from 'react-native';
import HIRAGANAS from 'constant/hiragana';
import { useCallback, useEffect, useState } from 'react';
import readerHandler from 'service/Reader';
import styled from 'styled-components/native';

const SoundScreen = () => {
  const [select, setSelect] = useState('');
  const [games, setGames] = useState<string[]>([]);

  const gameSettingHanlder = useCallback(() => {
    const flatMap = HIRAGANAS.flat();
    const randomCharacter = flatMap[Math.floor(Math.random() * flatMap.length)];

    const filterMap = flatMap
      .filter((char) => char !== randomCharacter)
      .sort(() => 0.5 - Math.random())
      .slice(0, 8);

    const gameMap = [...filterMap, randomCharacter].sort(
      () => 0.5 - Math.random(),
    );

    setGames(gameMap);
    setSelect(randomCharacter);
    const time = setTimeout(() => {
      readerHandler.playSound(`${randomCharacter}`);
    }, 200);

    return () => {
      clearTimeout(time);
    };
  }, []);

  useEffect(() => {
    gameSettingHanlder();
  }, []);

  const confirmHandler = (game: string) => {
    if (game === select) {
      return Alert.alert('정답입니다.', '', [
        {
          text: '확인',
          onPress: () => gameSettingHanlder(),
        },
      ]);
    }

    Alert.alert('틀렸습니다.');
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => readerHandler.playSound(select)}>
        <Text style={{ fontSize: 24 }}>다시 듣기</Text>
      </TouchableOpacity>

      <GameContainer>
        {games.map((game) => (
          <PressableStyle key={game} onPress={() => confirmHandler(game)}>
            <PressableTextStyle>{game}</PressableTextStyle>
          </PressableStyle>
        ))}
      </GameContainer>
    </Container>
  );
};

export default SoundScreen;

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const GameContainer = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const PressableStyle = styled.TouchableOpacity`
  background: #000;
  align-items: center;
  justify-content: center;
  width: ${Dimensions.get('window').width / 3}px;
  height: ${Dimensions.get('window').width / 3}px;
`;

const PressableTextStyle = styled.Text`
  color: #fff;
  font-size: 36px;
`;
