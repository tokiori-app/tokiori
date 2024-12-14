import {
  TabBar,
  TabBarIndicator,
  TabBarItem,
  NavigationState,
  TabDescriptor,
  Route,
  SceneRendererProps,
} from 'react-native-tab-view';
import COLORS from '@constant/color';
import t from '@constant/typography';
import { useRef } from 'react';

interface RenderTabBarProps<T extends Route> {
  navigationState: NavigationState<T>;
  options: Record<string, TabDescriptor<T>> | undefined;
}

const KanaMenuTabBar = (
  props: SceneRendererProps & RenderTabBarProps<Route>,
) => {
  const firstPositionRef = useRef<number | null>(null);
  const PADDING_HORIZONTAL = 4;

  return (
    <TabBar
      {...props}
      style={{
        backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
        shadowOffset: { height: 0, width: 0 },
        shadowColor: 'transparent',
      }}
      tabStyle={{ width: 'auto' }}
      pressColor="transparent"
      activeColor={COLORS.black}
      inactiveColor={COLORS.black}
      contentContainerStyle={{
        justifyContent: 'space-around',
      }}
      renderTabBarItem={(tabBarItemProps) => {
        return (
          <TabBarItem
            {...tabBarItemProps}
            style={{
              paddingTop: 8,
              paddingBottom: 16,
              paddingHorizontal: 4,
            }}
            labelStyle={{
              ...t.title2,
            }}
          />
        );
      }}
      renderIndicator={(indicatorProps) => {
        const { index, routes } = indicatorProps.navigationState;
        const { layout } = indicatorProps;

        const tabItemWidth = indicatorProps.getTabWidth(index);
        const totalTabLength = routes.length;
        const tabItemContainerWidth = layout.width / totalTabLength;

        if (firstPositionRef.current === null) {
          const startPosition =
            (tabItemContainerWidth - tabItemWidth) / 2 + PADDING_HORIZONTAL;

          firstPositionRef.current = startPosition;
        }

        const multiplier =
          index === 0
            ? 0
            : firstPositionRef.current * index - PADDING_HORIZONTAL;

        return (
          <TabBarIndicator
            {...indicatorProps}
            width={tabItemWidth}
            style={{
              borderColor: COLORS.main,
              borderWidth: 2,
              bottom: 2,
              backgroundColor: COLORS.main,
              start: firstPositionRef.current + multiplier,
            }}
          />
        );
      }}
    />
  );
};

export default KanaMenuTabBar;
