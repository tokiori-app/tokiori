import { supabase } from 'lib/supabase';

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
