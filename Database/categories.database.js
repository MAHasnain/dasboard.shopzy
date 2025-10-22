const SUPABASE_URL = `https://ufeiacuottjvkuezhyue.supabase.co`;
const SUPABASE_ANON_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmZWlhY3VvdHRqdmt1ZXpoeXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MTQ3MDgsImV4cCI6MjA3NjE5MDcwOH0.3nRXCTj84tAReLv6w9c0QIDCzuYphEo64F3tQn0BQ30`;

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);



export const getAllCategories = async () => {

    const { data, error } = await supabaseClient
        .from('Categories')
        .select()

    if (error) {
        console.error(error);
        return error;
    }

    console.log(data);
    return data;
}

export const getCategoryById = async (categoryId) => {
    const { data, error } = await supabaseClient
        .from("Categories")
        .select()
        .eq('id', categoryId)
        .single();

    if (error) {
        console.error(error);
        return error;
    }
    // console.log(data);
    return data;
}

export const createCategory = async (categoryData) => {

    const { data, error } = await supabaseClient
        .from('Categories')
        .insert(categoryData)
        .select("*")

    if (error) {
        console.error(error);
        return error;
    }
    // console.log(data);
    return data;

}
export const updateCategory = async (categoryId, categoryData) => {

    const { data, error } = await supabaseClient
        .from('Categories')
        .update(categoryData)
        .eq('id', categoryId)
        .select()

    if (error) {
        console.error(error);
        return error;
    }
    console.log(data);
    return data;
}
export const removeCategory = async (categoryId) => {

    const { data, error } = await supabaseClient
        .from('Categories')
        .delete()
        .eq('id', categoryId)
        .select()

    if (error) {
        console.error(error);
        return error;
    }
    console.log(data);
    return data;
}