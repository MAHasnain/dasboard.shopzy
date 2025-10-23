const SUPABASE_URL = `SUPABASE_URL`;
const SUPABASE_ANON_KEY = `SUPABASE_ANON_KEY`;

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


export const getAllProducts = async () => {

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

export const getProductById = async (id) => {
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

export const createProduct = async (productData) => {

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
export const updateProduct = async (productId, productData) => {

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
export const removeProduct = async (productId) => {

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