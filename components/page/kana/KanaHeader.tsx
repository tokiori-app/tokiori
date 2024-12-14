import Header from '@components/common/layout/Header';
import PrevBtn from '@components/common/layout/Header/subcomponents/PrevBtn';
import SettingBtn from '@components/common/layout/Header/subcomponents/SettingBtn';
import KanaNavigationSwitch from '@components/page/kana/KanaNavigationSwitch';

const KanaHeader = () => {
  return (
    <Header>
      <Header.Left>
        <PrevBtn />
      </Header.Left>

      <Header.Center>
        <KanaNavigationSwitch />
      </Header.Center>

      <Header.Right>
        <SettingBtn />
      </Header.Right>
    </Header>
  );
};

export default KanaHeader;
