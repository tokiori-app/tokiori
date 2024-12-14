import { supabase } from 'lib/supabase';

/**
 * 공지사항을 가져옵니다.
 * @returns {NoticeType[]} 공지사항 배열 반환
 */
const getNotice = async () => {
  const { data, error } = await supabase.from('notices').select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default getNotice;
