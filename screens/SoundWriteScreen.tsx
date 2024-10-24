import { Alert, Text, TouchableOpacity } from 'react-native';
import HIRAGANAS from 'constant/hiragana';
import { useCallback, useEffect, useState } from 'react';
import readerHandler from 'service/Reader';
import styled from 'styled-components/native';

const SoundWriteScreen = () => {
  const [select, setSelect] = useState('');
  const [text, onChangeText] = useState<string>('');

  const gameSettingHanlder = useCallback(() => {
    const flatMap = HIRAGANAS.flat();
    const randomCharacter = flatMap[Math.floor(Math.random() * flatMap.length)];

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

  return (
    <Container>
      <TouchableOpacity onPress={() => readerHandler.playSound(select)}>
        <Text style={{ fontSize: 24 }}>다시 듣기</Text>
      </TouchableOpacity>

      <TextInputStyle
        onChangeText={onChangeText}
        onSubmitEditing={() => {
          if (select === text) {
            return Alert.alert('맞았습니다.', '', [
              {
                text: '확인',
                onPress: () => {
                  gameSettingHanlder();
                  onChangeText('');
                },
              },
            ]);
          }
          Alert.alert('틀렸습니다');
        }}
        placeholder="정답을 입력해주세요"
      >
        {text}
      </TextInputStyle>
    </Container>
  );
};

export default SoundWriteScreen;

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const TextInputStyle = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #ddd;
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 30px;
  padding-bottom: 10px;
`;
