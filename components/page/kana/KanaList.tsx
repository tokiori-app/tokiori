import { FlatList, StyleSheet, Text, View } from 'react-native';
import COLORS from '@constant/color';
import { HIRAGANAS, KATAKANAS } from '@constant/kana';
import t from '@constant/typography';
import KanaText from './KanaText';

interface KanaListProps {
  type: 'hiragana' | 'katakana';
}

const KanaList = ({ type }: KanaListProps) => {
  const sections = type === 'hiragana' ? HIRAGANAS : KATAKANAS;

  return (
    <FlatList
      data={sections}
      keyExtractor={(item) => `${item.title}`}
      contentContainerStyle={{ marginTop: 64 }}
      renderItem={({ item }) => (
        <View style={s.container}>
          <Text style={[s.title, t.heading2]}>{item.title}</Text>

          <View style={s.columnsContainer}>
            {item.columns.map((col, index) => (
              <Text key={index} style={[s.columnText, t.subtitle]}>
                {col}
              </Text>
            ))}
          </View>

          <View style={s.sectionContent}>
            {item.rows.map((row, index) => (
              <View style={s.rowContainer}>
                <View style={s.rowLabel}>
                  <Text style={[s.labelText, t.subtitle]}>{row.label}</Text>
                </View>
                <View style={s.kanaContainer}>
                  {row.items.map((kana, idx) =>
                    kana ? (
                      <KanaText key={idx} isRubyVisible kana={kana} />
                    ) : (
                      <View key={idx} style={s.emptyCell} />
                    ),
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
    />
  );
};

const s = StyleSheet.create({
  container: {
    marginBottom: 32,
    backgroundColor: COLORS.secondary,
    paddingTop: 16,
    paddingBottom: 48,
    paddingHorizontal: 16,
  },
  title: {
    marginBottom: 16,
    color: COLORS.gray1,
    paddingLeft: 31,
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 31,
    marginBottom: 16,
  },
  columnText: {
    color: COLORS.gray2,
    textAlign: 'center',
    width: 56,
  },
  sectionContent: {
    flexDirection: 'column',
    gap: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowLabel: {
    width: 31,
  },
  labelText: {
    color: COLORS.gray2,
    width: 15,
  },
  kanaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emptyCell: {
    height: 70,
    width: 56,
  },
});

export default KanaList;
