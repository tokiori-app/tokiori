import { Text } from 'react-native';
import t from '@constant/typography';

const HeaderTitle = ({ label }: { label: string }) => {
  return <Text style={t.heading1}>{label}</Text>;
};

export default HeaderTitle;
