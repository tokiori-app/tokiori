import styled from 'styled-components/native';

const RubyText = ({ ruby, base, color }: RubyTextState) => {
  return (
    <RubyContainer>
      <StyledRubyText color={color}>{ruby}</StyledRubyText>
      <BaseText color={color}>{base}</BaseText>
    </RubyContainer>
  );
};

export default RubyText;

type ColorType = { color?: string };

interface RubyTextState extends ColorType {
  ruby: string;
  base: string;
}

const RubyContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: -10px;
`;

const StyledRubyText = styled.Text<ColorType>`
  font-size: 10px;
  margin-top: -12px;
  color: ${({ color }) => (color ? color : '#000')};
`;

const BaseText = styled.Text<ColorType>`
  font-size: 16px;
  color: ${({ color }) => (color ? color : '#000')};
`;
