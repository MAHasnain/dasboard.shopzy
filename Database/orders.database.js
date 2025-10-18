const SUPABASE_URL = `https://ufeiacuottjvkuezhyue.supabase.co`;
const SUPABASE_ANON_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmZWlhY3VvdHRqdmt1ZXpoeXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MTQ3MDgsImV4cCI6MjA3NjE5MDcwOH0.3nRXCTj84tAReLv6w9c0QIDCzuYphEo64F3tQn0BQ30`;

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const getAllOrders = async () => {

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

const editOrder = async (orderId, orderData) => {
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

const deleteOrder = async (orderId) => {
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