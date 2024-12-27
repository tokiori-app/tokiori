import { StyleSheet, View } from 'react-native';
import SettingSVG from '@assets/icons/setting.svg';
import COLORS from '@constant/color';
import MiniCard from '../MiniCard';

const MinigameTabContent = () => (
  <View style={s.container}>
    <View style={[s.grid, s.basePadding]}>
      <MiniCard>
        <MiniCard.Icon icon={<SettingSVG />} />
        <MiniCard.Text
          title="단어 → 음성 게임"
          subtitle="주어진 단어에 맞는 음성 맞추기"
        />
      </MiniCard>
      <MiniCard>
        <MiniCard.Icon icon={<SettingSVG />} />
        <MiniCard.Text title="이미지 게임" subtitle="이미지 보고 단어 맞추기" />
      </MiniCard>
      <MiniCard>
        <MiniCard.Icon icon={<SettingSVG />} />
        <MiniCard.Text
          title="음성 → 단어 게임"
          subtitle="단어 음성 듣고 맞는 단어 맞추기"
        />
      </MiniCard>
    </View>
    <View style={[s.bottomGrid, s.basePadding]}>
      <MiniCard>
        <MiniCard.Icon icon={<SettingSVG />} />
        <MiniCard.Text title="틀린 단어모아보기" />
      </MiniCard>
    </View>
  </View>
);

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  basePadding: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  grid: {
    gap: 16,
  },
  bottomGrid: {
    borderTopWidth: 2,
    borderColor: COLORS.gray3,
  },
});

export default MinigameTabContent;
