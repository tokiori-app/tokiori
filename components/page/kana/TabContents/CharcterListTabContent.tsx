import { usePathname } from 'expo-router';
import KanaList from '../KanaList';

const CharcterListTabContent = () => {
  const pathname = usePathname();
  const isHiragana = pathname.includes('hiragana');

  return <KanaList type={isHiragana ? 'hiragana' : 'katakana'} />;
};

export default CharcterListTabContent;
