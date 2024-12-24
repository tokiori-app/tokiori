import Header from '@components/common/layout/Header';
import PrevBtn from '@components/common/layout/Header/subcomponents/PrevBtn';
import SettingBtn from '@components/common/layout/Header/subcomponents/SettingBtn';

const WordHeader = () => {
  return (
    <Header>
      <Header.Left>
        <PrevBtn />
      </Header.Left>
      <Header.Right>
        <SettingBtn />
      </Header.Right>
    </Header>
  );
};

export default WordHeader;
