import Header from '@components/common/layout/Header';
import PrevBtn from '@components/common/layout/Header/subcomponents/PrevBtn';
import HeaderTitle from '@components/common/layout/Header/subcomponents/Title';

const SettingHeader = ({ title }: { title: string }) => {
  return (
    <Header>
      <Header.left>
        <PrevBtn />
      </Header.left>
      <Header.center>
        <HeaderTitle label={title} />
      </Header.center>
    </Header>
  );
};

export default SettingHeader;
