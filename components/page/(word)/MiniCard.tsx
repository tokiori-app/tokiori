import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '@constant/color';
import t from '@constant/typography';
import { Link } from 'expo-router';
import { ReactNode } from 'react';

interface MiniCardProps {
  children: ReactNode;
}

const MiniCard = ({ children }: MiniCardProps) => {
  return (
    <Link href="" asChild>
      <TouchableOpacity style={s.container}>{children}</TouchableOpacity>
    </Link>
  );
};

interface MiniCardIconProps {
  icon: ReactNode;
}

const MiniCardIcon = ({ icon }: MiniCardIconProps) => {
  return <View style={s.icon}>{icon}</View>;
};

interface MiniCardTextProps {
  title: string;
  subtitle?: string;
}

const MiniCardText = ({ title, subtitle }: MiniCardTextProps) => {
  return (
    <View style={s.textBox}>
      <Text style={t.title2}>{title}</Text>
      {subtitle && <Text style={t.subtitle}>{subtitle}</Text>}
    </View>
  );
};

MiniCard.Icon = MiniCardIcon;
MiniCard.Text = MiniCardText;

export default MiniCard;

const s = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.main,
    borderWidth: 2,
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    borderRadius: 20,
  },
  icon: {
    width: 64,
    height: 64,
    borderRadius: 10000,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  textBox: {
    gap: 4,
  },
});
