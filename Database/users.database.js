const SUPABASE_URL = `https://ufeiacuottjvkuezhyue.supabase.co`;
const SUPABASE_ANON_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmZWlhY3VvdHRqdmt1ZXpoeXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MTQ3MDgsImV4cCI6MjA3NjE5MDcwOH0.3nRXCTj84tAReLv6w9c0QIDCzuYphEo64F3tQn0BQ30`;

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const getAllUsers = async () => {
    const { data: { users }, error } = await supabaseClient.auth.admin.listUsers({
        page: 1,
        perPage: 1000
    })

    if (error) {
        console.error(error);
        return error;
    }
    console.log(users);
    return users;
}

const createNewUser = async (userData) => {
    const { data, error } = await supabaseClient.auth.admin.createUser(
        userData
        //     {
        //     email: 'user@email.com',
        //     password: 'password',
        //     user_metadata: { name: 'Yoda' }
        // }
    )

    if (error) {
        console.error(error);
        return error;
    }
    console.log(data);
    return data;

}

const deleteAUser = async (userId) => {
    const { data, error } = await supabaseClient.auth.admin.deleteUser(userId);

    if (error) {
        console.error(error);
        return error;
    }
    console.log(data);
    return data;
}

const updateAUser = async (userId, userData) => {
    const { data: user, error } = await supabaseClient.auth.admin.updateUserById(
        userId, userData
        //   { email: 'new@email.com', password: 'new_password' }
    )

    if (error) {
        console.error(error);
        return error;
    }
    console.log(user);
    return user;

}

const createANewUser = async (userData) => {
    const { data, error } = await supabase.auth.admin.createUser(
        userData
        //     {us
        //     email: 'user@email.com',
        //     password: 'password',
        //     user_metadata: { name: 'Yoda' }
        // }
    )

    if (error) {
        console.error(error);
        return error;
    }
    console.log(data);
    return data;

}