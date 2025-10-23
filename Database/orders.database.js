const SUPABASE_URL = `SUPABASE_URL`;
const SUPABASE_ANON_KEY = `SUPABASE_ANON_KEY`;

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const getAllOrders = async () => {

    const { data, error } = await supabaseClient
        .from('Orders')
        .select()

    if (error) {
        console.error(error);
        return error;
    }
    console.log(data);
    return data;

}

export const editOrder = async (orderId, orderData) => {
    const { data, error } = await supabaseClient
        .from('Orders')
        .update(orderData)
        .eq('id', orderId)
        .select()

    if (error) {
        console.error(error);
        return error;
    }
    console.log(data);
    return data;

}

export const deleteOrder = async (orderId) => {
    const { data, error } = await supabaseClient
        .from('Orders')
        .delete()
        .eq('id', orderId)
        .select()

    if (error) {
        console.error(error);
        return error;
    }
    console.log(data);
    return data;
}