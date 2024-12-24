import { supabase } from 'lib/supabase';

/**
 * 단어장을 가져옵니다.
 * @returns 단어장배열 반환
 */
const getWords = async (page: number, pageSize: number) => {
  const { data, error } = await supabase
    .from('words')
    .select('*')
    .order('id', { ascending: false })
    .range((page - 1) * pageSize, page * pageSize - 1);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default getWords;
