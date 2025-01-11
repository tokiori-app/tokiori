import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import NextSVG from '@assets/icons/right-arrow.svg';
import COLORS from '@constant/color';
import t from '@constant/typography';
import { Link } from 'expo-router';

interface ButtonProps {
  href: string;
  label: string;
}

const Button = ({ href, label }: ButtonProps) => {
  return (
    <Link href={href} asChild>
      <TouchableOpacity style={s.button}>
        <Text style={t.heading1}>{label}</Text>
        <NextSVG />
      </TouchableOpacity>
    </Link>
  );
};

export default Button;

const s = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.white,
    height: 81,
    borderRadius: 20,
    paddingHorizontal: 25,
  },
});
