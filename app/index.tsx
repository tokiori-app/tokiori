import styled from 'styled-components/native';

const index = () => {
  return (
    <RubyContainer>
      {/* 히라가나 */}
      <RubyText>ふりがな</RubyText>
      {/* 한자 */}
      <BaseText>漢字</BaseText>
    </RubyContainer>
  );
};

export default index;

const RubyContainer = styled.View`
  align-items: 'center';
`;

const RubyText = styled.Text`
  font-size: 10px;
  position: absolute;
  top: -12;
`;

const BaseText = styled.Text`
  font-size: 20px;
`;
