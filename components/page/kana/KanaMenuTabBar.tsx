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

interface RenderTabBarProps<T extends Route> {
  navigationState: NavigationState<T>;
  options: Record<string, TabDescriptor<T>> | undefined;
}

const KanaMenuTabBar = (
  props: SceneRendererProps & RenderTabBarProps<Route>,
) => {
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
      indicatorStyle={{
        borderWidth: 2,
        borderColor: COLORS.main,
      }}
      pressColor="transparent"
      activeColor={COLORS.black}
      inactiveColor={COLORS.black}
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
    />
  );
};

export default KanaMenuTabBar;
