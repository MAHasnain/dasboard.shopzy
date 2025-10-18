const SUPABASE_URL = `https://ufeiacuottjvkuezhyue.supabase.co`;
const SUPABASE_ANON_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmZWlhY3VvdHRqdmt1ZXpoeXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MTQ3MDgsImV4cCI6MjA3NjE5MDcwOH0.3nRXCTj84tAReLv6w9c0QIDCzuYphEo64F3tQn0BQ30`;

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


const getAllProducts = async () => {

    const { data, error } = await supabaseClient
        .from('Products')
        .select()

    if (error) {
        console.error(error);
        return error;
    }

    console.log(data);
    return data;
}

const getProductById = async (id) => {
    const { data, error } = await supabaseClient
        .from("Products")
        .select()
        .eq('id', id)
        .single();

    if (error) {
        console.error(error);
        return error;
    }
    // console.log(data);
    return data;
}

const createProduct = async (productData) => {

    const { data, error } = await supabaseClient
        .from('Products')
        .insert(productData)
        .select()

    if (error) {
        console.error(error);
        return error;
    }
    // console.log(data);
    return data;

}
const updateProduct = async (productId, productData) => {

    const { data, error } = await supabaseClient
        .from('Products')
        .update(productData)
        .eq('id', productId)
        .select()

    if (error) {
        console.error(error);
        return error;
    }
    // console.log(data);
    return data;
}
const removeProduct = async (productId) => {

    const { data, error } = await supabaseClient
        .from('Products')
        .delete()
        .eq('id', productId)
        .select()

    if (error) {
        console.error(error);
        return error;
    }
    // console.log(data);
    return data;
}