import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import DownArrowSVG from '@assets/icons/down-arrow.svg';
import COLORS from '@constant/color';
import t from '@constant/typography';
import { useRef, useState } from 'react';

interface DropDownProps {
  item: any; // firebase 연동후 수정
  index: number;
}

const DropDown = ({ item, index }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    const config = {
      duration: 300,
      toValue: isOpen ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    setIsOpen(!isOpen);
  };

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: [1, -1],
  });

  return (
    <View>
      <Pressable
        style={[s.titleContainer, isOpen ? null : s.titleBorder]}
        onPress={toggleAccordion}
      >
        <View>
          <Text style={t.title3}>공지사항</Text>
          <Text style={[t.subtitle, s.createText]}>2024.10.11</Text>
        </View>
        <Animated.View style={{ transform: [{ scaleY: arrowTransform }] }}>
          <DownArrowSVG />
        </Animated.View>
      </Pressable>
      {isOpen && (
        <View style={s.contextView}>
          <Text style={t.title3}>{item.content}</Text>
        </View>
      )}
    </View>
  );
};

export default DropDown;

const s = StyleSheet.create({
  createText: {
    marginTop: 5,
    color: '#6666',
  },
  titleBorder: {
    borderColor: '#ECECEC',
    borderBottomWidth: 2,
  },
  titleContainer: {
    padding: 16,
    paddingBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  contextView: {
    padding: 16,
    backgroundColor: COLORS.secondary,
  },
});
