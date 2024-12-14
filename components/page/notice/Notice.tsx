import { lazy } from 'react';
import getNotice from 'service/getNotice';
import DropDown from '../setting/DropDown';

const Notice = lazy(async () => {
  const notices = await getNotice();
  return {
    default: () =>
      notices.map((notice, index) => (
        <DropDown key={index} item={notice} index={index} />
      )),
  };
});

export default Notice;
