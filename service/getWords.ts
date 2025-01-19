import { supabase } from 'lib/supabase';

const getWords = async (page: number, pageSize: number) => {
  try {
    const { data, error } = await supabase
      .from('words')
      .select('*')
      .order('id', { ascending: false })
      .range((page - 1) * pageSize, page * pageSize - 1);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error: any) {
    console.error('Error fetching :', error.message);
  }
};

export default getWords;
