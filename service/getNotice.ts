import { supabase } from 'lib/supabase';

/**
 * 공지사항을 가져옵니다.
 * @returns {NoticeType[]} 공지사항 배열 반환
 */
const getNotice = async () => {
  try {
    const { data, error } = await supabase.from('notices').select();

    if (error) {
      console.error(error.message);
      return;
    }

    if (data && data.length > 0) {
      return data;
    }
  } catch (error: any) {
    console.error('Error fetching :', error.message);
  }
};

export default getNotice;
