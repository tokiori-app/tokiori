import { Text, Dimensions, Alert, Button, View } from 'react-native';
import HIRAGANAS from 'constant/hiragana';
import { useCallback, useEffect, useState } from 'react';
import readerHandler from 'service/Reader';
import styled from 'styled-components/native';

const SoundWordScreen = () => {
  const [character, setCharacter] = useState('');
  const [games, setGames] = useState<string[]>([]);
  const [select, setSelect] = useState('');

  const gameSettingHanlder = useCallback(() => {
    const flatMap = HIRAGANAS.flat();
    const randomCharacter = flatMap[Math.floor(Math.random() * flatMap.length)];

    const filterMap = flatMap
      .filter((char) => char !== randomCharacter)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const gameMap = [...filterMap, randomCharacter].sort(
      () => 0.5 - Math.random(),
    );

    setGames(gameMap);
    setCharacter(randomCharacter);
  }, []);

  useEffect(() => {
    gameSettingHanlder();
  }, []);

  const soundHandler = (game: string) => {
    setSelect(game);
    readerHandler.playSound(game);
  };

  const confirmHandler = () => {
    if (!select) return Alert.alert('정답을 클릭해주세요');

    if (character === select) {
      Alert.alert('정답입니다', '', [
        {
          text: '확인',
          onPress: () => {
            gameSettingHanlder();
            setSelect('');
          },
        },
      ]);
    }
  };

  return (
    <Container>
      <Text style={{ fontSize: 48 }}>{character}</Text>

      <GameContainer>
        {games.map((game) => (
          <PressableStyle key={game} onPress={() => soundHandler(game)}>
            <PressableTextStyle>듣기</PressableTextStyle>
            {select === game && <Text style={{ color: '#fff' }}>선택됨</Text>}
          </PressableStyle>
        ))}
      </GameContainer>

      <View
        style={{
          marginTop: 40,
        }}
      >
        <Button title="확인" onPress={confirmHandler} />
      </View>
    </Container>
  );
};

export default SoundWordScreen;

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
  width: ${Dimensions.get('window').width / 2}px;
  height: ${Dimensions.get('window').width / 2}px;
`;

const PressableTextStyle = styled.Text`
  color: #fff;
  font-size: 20px;
`;
