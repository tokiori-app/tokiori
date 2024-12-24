import Header from '@components/common/layout/Header';
import PrevBtn from '@components/common/layout/Header/subcomponents/PrevBtn';
import HeaderTitle from '@components/common/layout/Header/subcomponents/Title';

const SettingHeader = ({ title }: { title: string }) => {
  return (
    <Header>
      <Header.Left>
        <PrevBtn />
      </Header.Left>
      <Header.Center>
        <HeaderTitle label={title} />
      </Header.Center>
    </Header>
  );
};

export default SettingHeader;
