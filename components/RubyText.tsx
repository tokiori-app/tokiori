import styled from 'styled-components/native';

const RubyText = ({ ruby, base }: RubyTextState) => {
  return (
    <RubyContainer>
      <StyledRubyText>{ruby}</StyledRubyText>
      <BaseText>{base}</BaseText>
    </RubyContainer>
  );
};

export default RubyText;

interface RubyTextState {
  ruby: string;
  base: string;
}

const RubyContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledRubyText = styled.Text`
  font-size: 10px;
  margin-top: -12px;
`;

const BaseText = styled.Text`
  font-size: 16px;
`;
